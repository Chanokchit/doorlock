# doorlock onechat bot.
- bot webhook สำหรับเขียนโค้ดโต้ตอบกับผู้ใช้

	endpoint : http://bot-thing.nexpie.com/bothook

- bottom menu page สำหรับเก็บ webview ของเมนูต่างๆ (ตอนนี้มีเมนูเดียว แต่เพิ่มทีหลังได้)

	endpoint: http://bot-thing.nexpie.com/botmenu/smartaccess

## การแก้ไข bot hook

	แก้ไฟล์ bothook/index.js

## การแก้ไข bot menu

	แก้ไฟล์ที่อยู่ใน botmenu/views เช่น เมยูของ smart access จะอยู่ที่ botmenu/views/smartaccess.ejs
    ซึ่งจะเป็น ejs tamplate สามารถเติม server side variable เข้าไปได้ จากรวั้นไป define ใน botmenu/index.js

    ถ้าต้องการเพิ่มเมนูใหม่ ต้องเพิ่มไฟล์ใหม่ในลักษณะเดียวกันใน botmenu/view
    และไปเพิ่ม express path handle ใน botmenu/index.js





