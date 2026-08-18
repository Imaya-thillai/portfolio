import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Expand layout constraints
    content = re.sub(r'max-w-[567]xl', 'max-w-[1440px] w-full', content)
    content = re.sub(r'px-6', 'px-6 md:px-12 lg:px-24', content)
    
    # Handle text colors for light/dark mode
    content = content.replace('text-neutral-100', 'text-neutral-900 dark:text-neutral-100')
    content = content.replace('text-neutral-200', 'text-neutral-800 dark:text-neutral-200')
    content = content.replace('text-neutral-300', 'text-neutral-700 dark:text-neutral-300')
    content = content.replace('text-neutral-400', 'text-neutral-600 dark:text-neutral-400')
    
    # Handle border and bg opacities
    content = re.sub(r'bg-white/\[([^\]]+)\]', r'bg-black/[\1] dark:bg-white/[\1]', content)
    content = re.sub(r'border-white/\[([^\]]+)\]', r'border-black/[\1] dark:border-white/[\1]', content)
    
    # Additional specific color updates
    content = content.replace('bg-[#050505]', 'bg-[#fafafa] dark:bg-[#050505]')
    content = content.replace('bg-[#0a0a0a]', 'bg-white dark:bg-[#0a0a0a]')
    content = content.replace('bg-white/[0.04]', 'bg-black/[0.04] dark:bg-white/[0.04]')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for root, dirs, files in os.walk('src/components'):
    for file in files:
        if file.endswith('.tsx') and file != 'ThemeToggle.tsx' and file != 'ThemeProvider.tsx':
            process_file(os.path.join(root, file))

# Also process page.tsx and layout.tsx
for file in ['page.tsx']:
    path = os.path.join('src/app', file)
    if os.path.exists(path):
        process_file(path)
