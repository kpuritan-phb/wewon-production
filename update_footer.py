import glob
import re

html_files = glob.glob('*.html')

new_footer = """    <footer>
        <div class="footer-copy">&copy; 위원프로덕션 (WE WON PRODUCTION)</div>
    </footer>"""

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = re.sub(r'<footer>[\s\S]*?</footer>', new_footer, content)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Updated footers")
