module.exports = function async() {
  const express = require("express");
  const path = require("path");
  const axios = require("axios");
  const fs = require("fs");

  let app = express();

  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "ejs");

  // for test in localhost

  app.get("/scandebug", (req, res, next) => {
      res.render("scandebug");
  });


  app.get("/smartaccess", (req, res, next) => {
    let result = {
      one_id: "one_id",
      key: [
        {
          name: "door",
          device_id: "9be0df5a-da0c-4428-b5bd-991b35f5b1bc",
          token: "vEB1ratSCXyVDDjeDt1seBvaPrK5BGiV",
        },
        {
          name: "window",
          device_id: "9be0df5a-da0c-4428-b5bd-991b35f5b1bc",
          token: "vEB1ratSCXyVDDjeDt1seBvaPrK5BGiV",
        },
        {
          name: "lamp",
          device_id: "9be0df5a-da0c-4428-b5bd-991b35f5b1bc",
          token: "vEB1ratSCXyVDDjeDt1seBvaPrK5BGiV",
        },
        {
          name: "test",
          device_id: "9be0df5a-da0c-4428-b5bd-991b35f5b1bc",
          token: "vEB1ratSCXyVDDjeDt1seBvaPrK5BGiV",
        }
      ],
    };
    res.render("smartaccess", { data: result });
  });

  // สำหรับ test บน webview ของ bot 

//   app.get("/smartaccess", (req, res, next) => {
//     try {
//       console.log("in /smartaccess");
//       if (req.query.onechat_token === undefined) {
//         console.log("onechat_token of undifind");
//         res.send({
//           message: "onechat_token of undifind",
//           status: "fail",
//           data: "",
//         });
//       } else {
//         const onechat_token = req.query.onechat_token;
//         console.log("onechat_token ===> ", onechat_token);

//         var data = JSON.stringify({
//           bot_id: "B2b50b20399fd52ce968dbcb2c79073f2",
//           source: onechat_token,
//         });

//         var config = {
//           method: "post",
//           url: "https://chat-api.one.th/manage/api/v1/getprofile",
//           headers: {
//             Authorization:
//               "Bearer Af7e8af04a84a53d581f65854ca82ba709e076d4fd05f4144a272b87d348ff52f9419951b87a246a3bf801b83ff6f1f49",
//             "Content-Type": "application/json",
//           },
//           data: data,
//         };

//         axios(config)
//           .then(function (response) {
//             console.log("data user ===> ", response.data);
//             const one_id = response.data.data.one_id;
//             console.log("one_id ===>", one_id);
//             let result = {
// 				one_id: "one_id",
// 				key: [
// 				  {
// 					name: "door",
// 					device_id: "9be0df5a-da0c-4428-b5bd-991b35f5b1bc",
// 					token: "vEB1ratSCXyVDDjeDt1seBvaPrK5BGiV",
// 				  },
// 				  {
// 					name: "window",
// 					device_id: "9be0df5a-da0c-4428-b5bd-991b35f5b1bc",
// 					token: "vEB1ratSCXyVDDjeDt1seBvaPrK5BGiV",
// 				  },
// 				  {
// 					name: "lamp",
// 					device_id: "9be0df5a-da0c-4428-b5bd-991b35f5b1bc",
// 					token: "vEB1ratSCXyVDDjeDt1seBvaPrK5BGiV",
// 				  },
// 				],
// 			  };
//             res.render("smartaccess", { data: result });
//           })
//           .catch(function (error) {
//             console.log("error ===>", error);
//             res
//               .status(401)
//               .send({
//                 message: err.response.data.errorMessage,
//                 status: "fail",
//                 data: "",
//               });
//           });
//       }
//     } catch (error) {
//       res
//         .status(401)
//         .send({ message: error.message, status: "fail", data: "" });
//     }
//   });

  app.get("*", (req, res, next) => {
    console.log("in all part");
    res.send("bot menu v1.0.0");
  });

  return app;
};
