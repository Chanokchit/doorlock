const responseUser = async(url, playload) => {
    let config = {
        method: 'post',
        url: url,
        headers: { 
            'Authorization': "Bearer Af7e8af04a84a53d581f65854ca82ba709e076d4fd05f4144a272b87d348ff52f9419951b87a246a3bf801b83ff6f1f49", 
            'Content-Type': 'application/json'
        },
        data : playload
        };
    let result = await axios(config)
    .catch(error => console.log(error))
    console.log("result ===>", result.data);
    
}

module.exports = async(req, res, next) => {
	try {
        console.log("req.body ===>", req.body);
        let user_id = req.body.source.user_id
        console.log("user_id ===>", user_id);
        let bot_id = req.body.bot_id
        console.log("bot_id ===>", bot_id);
        console.log("message ===>", req.body.message.text);

        let url = ''
        let playload = ''

        if (req.body.message.text === 'device_list') {
            console.log(">>>>>>>>>>>>>>>> device list <<<<<<<<<<<<<<<<<<");

            playload = JSON.stringify({
                "to":user_id,
                "bot_id": bot_id,
                "type": "template",
                "custom_notification": "เปิดอ่านข้อความใหม่จากทางเรา",
                "elements": [
                    {
                        "image": "https://cdn.jim-nielsen.com/ios/512/bluetooth-ble-device-finder-2020-02-10.png",
                        "title": "Home",
                        "detail": "Door",
                        "choice": [
                            {
                                "label" : "access divice",
                                "type" : "webview",
                                "url" : "http://bot-thing.nexpie.com/botmenu/smartaccess",
                                "size" : "full",
                                "sign" : "true",
                                "onechat_token" : "true"
                            }
                        ]
                    },
                    {
                        "image": "https://www.centare.com/static/0512613b9c263baddd3213b37494eaa9/26df7/ble-app-icon.png",
                        "title": "Office",
                        "detail": "Door",
                        "choice": [
                            {
                                "label" : "access divice",
                                "type" : "webview",
                                "url" : "http://bot-thing.nexpie.com/botmenu/smartaccess",
                                "size" : "full",
                                "sign" : "true",
                                "onechat_token" : "true"
                            }
                        ]
                    }
                ]
            })
            
            url =  'https://chat-api.one.th/message/api/v1/push_message'

            await responseUser(url, playload)

            playload = JSON.stringify({
                "to": user_id,
                "bot_id": bot_id,
                "message" : "ต้องการทำรายการอื่นหรือไม่",
                "quick_reply" : [  
                    {
                        "label" : "ใช่",
                        "type" : "text",
                        "message" : "ใช่",
                        "payload" : "ใช่"
                    },
                    {
                        "label" : "ไม่",
                        "type" : "text",
                        "message" : "ไม่",
                        "payload" : "ไม่"
                    },
                ]
            });
        
            url = 'https://chat-api.one.th/message/api/v1/push_quickreply'

        } else if (req.body.message.text === 'device_name') {
            console.log(">>>>>>>>>>>>>>>> device_name <<<<<<<<<<<<<<<<<<");
            playload = JSON.stringify({
                "bot_id": bot_id,
                "to": user_id,
                "elements": [
                    {
                        "type" : "text",
                        "image" : "https://cdn.jim-nielsen.com/ios/512/bluetooth-ble-device-finder-2020-02-10.png",
                        "action" : "Device01",
                        "payload" : "Device01",
                        "sign" : "false",
                        "onechat_token" : "false",
                        "button" : "Device01"
                      },
                      {
                        "type" : "text",
                        "image" : "https://www.centare.com/static/0512613b9c263baddd3213b37494eaa9/26df7/ble-app-icon.png",
                        "action" : "Device02",
                        "payload" : "Device02",
                        "sign" : "false",
                        "onechat_token" : "false",
                        "button" : "Device02"
                      }
                ]
            })
            url = "https://chat-api.one.th/bot-message/api/v1/image-carousel"

        } else if (req.body.message.text === 'Device01') {
            console.log(">>>>>>>>>>>>>>>> Device01 <<<<<<<<<<<<<<<<<<");
            playload = JSON.stringify({
                "to": user_id,
                "bot_id": bot_id,
                "type" : "text",
                "message" : 'infomation of Device01',
                "custom_notification" : "Device01"
            });
            
            url =  'https://chat-api.one.th/message/api/v1/push_message'

            await responseUser(url, playload)

            playload = JSON.stringify({
                "to": user_id,
                "bot_id": bot_id,
                "message" : "ต้องการทำรายการอื่นหรือไม่",
                "quick_reply" : [  
                    {
                        "label" : "ใช่",
                        "type" : "text",
                        "message" : "ใช่",
                        "payload" : "ใช่"
                    },
                    {
                        "label" : "ไม่",
                        "type" : "text",
                        "message" : "ไม่",
                        "payload" : "ไม่"
                    },
                ]
            });
        
            url = 'https://chat-api.one.th/message/api/v1/push_quickreply'
        
        } else if (req.body.message.text === 'Device02') {
            console.log(">>>>>>>>>>>>>>>> Device02 <<<<<<<<<<<<<<<<<<");
            playload = JSON.stringify({
                "to": user_id,
                "bot_id": bot_id,
                "type" : "text",
                "message" : 'infomation of Device02',
                "custom_notification" : "Device02"
            });
            
            url =  'https://chat-api.one.th/message/api/v1/push_message'

            await responseUser(url, playload)

            playload = JSON.stringify({
                "to": user_id,
                "bot_id": bot_id,
                "message" : "ต้องการทำรายการอื่นหรือไม่",
                "quick_reply" : [  
                    {
                        "label" : "ใช่",
                        "type" : "text",
                        "message" : "ใช่",
                        "payload" : "ใช่"
                    },
                    {
                        "label" : "ไม่",
                        "type" : "text",
                        "message" : "ไม่",
                        "payload" : "ไม่"
                    },
                ]
            });
        
            url = 'https://chat-api.one.th/message/api/v1/push_quickreply'


        } else if (req.body.message.text === 'history') {
            console.log(">>>>>>>>>>>>>>>> history <<<<<<<<<<<<<<<<<<");
            playload = JSON.stringify({
                "to": user_id,
                "bot_id": bot_id,
                "type" : "text",
                "message" : 'ไม่มีประวัติ',
                "custom_notification" : "history"
            });
            
            url =  'https://chat-api.one.th/message/api/v1/push_message'

            await responseUser(url, playload)

            playload = JSON.stringify({
                "to": user_id,
                "bot_id": bot_id,
                "message" : "ต้องการทำรายการอื่นหรือไม่",
                "quick_reply" : [  
                    {
                        "label" : "ใช่",
                        "type" : "text",
                        "message" : "ใช่",
                        "payload" : "ใช่"
                    },
                    {
                        "label" : "ไม่",
                        "type" : "text",
                        "message" : "ไม่",
                        "payload" : "ไม่"
                    },
                ]
            });
        
            url = 'https://chat-api.one.th/message/api/v1/push_quickreply'

        
        } else if (req.body.message.text === 'ไม่') {
            console.log(">>>>>>>>>>>>>>>> no <<<<<<<<<<<<<<<<<<");
            playload = {
                "user_id" : user_id,
                "bot_id" : bot_id
            }
            url = "https://chat-api.one.th/alpine/api/v1/switchKeyboard"
        } else {
            playload = JSON.stringify({
                "to": user_id,
                "bot_id": bot_id,
                "message" : "คุณต้องการทำรายการใด",
                "quick_reply" : [  
                    {
                        "label" : "Device list",
                        "type" : "text",
                        "message" : "device_list",
                        "payload" : "Device"
                    },
                    {
                        "label" : "Device name",
                        "type" : "text",
                        "message" : "device_name",
                        "payload" : "Device"
                    },
                    {
                        "label" : "History",
                        "type" : "text",
                        "message" : "history",
                        "payload" : "History"
                    }
                ]
            });
    
            url = 'https://chat-api.one.th/message/api/v1/push_quickreply'
        }

        await responseUser(url, playload)

        res.send("test webhook onechat ")

    } catch (err) {
        console.log(err);    
    }
}
