// var t = db.aTable.find();

// t.forEach(function( aRow ) {
//     aRow.fields.forEach( function( aField ){
//         aField.items.forEach( function( item ){
//             var aNewItem = { item: parseInt(item), ref: 0 };
//             db.aTable.update(item, {$set:aNewItem})
//         } )
//     } )
// });
// //replace(substr, replacetext)
// var myString = '999 JavaScript Coders';
// console.log(myString.replace(/JavaScript/i, "jQuery"));
// //output: 999 jQuery Coders
//
// //replace(regexp, replacetext)
// var myString = '999 JavaScript Coders';
// console.log(myString.replace(new RegExp( "999", "gi" ), "The"));
// //output: The JavaScript Coders
// db.users.find({'image_path_full':{'$regex': '.*/www.catchme.global/.*'}}).limit(5).sort(-1).pretty()

//
// db.users.find({'image_path_full':{'$regex': '.*/www.catchme.global/.*'}}).forEach(function( aRow ) {
//       var curr_id= aRow._id;
//       var imgpath= aRow.image_path_full;
//       var imgthumbpath= aRow.image_path_thumb;
//       console.log(imgpath.replace(/www.catchme.global/i, "www.catchme.global:8080"));
//       console.log(imgthumbpath.replace(/www.catchme.global/i, "www.catchme.global:8080"));
//       var newimgpath = imgpath.replace(/www.catchme.global/i, "www.catchme.global:8080");
//       var newimgthumbpath = imgthumbpath.replace(/www.catchme.global/i, "www.catchme.global:8080");
//       console.log("imgpath");
//       console.log("imgthumbpath");
//       db.users.update({'_id':curr_id}, {$set:{'image_path_full':newimgpath, 'image_path_thumb':newimgthumbpath}})
// });


// var datamodule = require('./../module/function.js');
// datamodule.updtUrlMeth_Pk();
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>OLD
/*updae url methods*/
exports.updtUrlMeth_Pk = function()  {
	//  console.log(db.users.find().count());
	db.get().collection('users').find({'image_path_full':{'$regex': '.*/www.catchme.global/.*'}}).forEach(function( aRow ) {
	      var curr_id= aRow._id;
	      var imgpath= aRow.image_path_full;
	      var imgthumbpath= aRow.image_path_thumb;
	      console.log("imgpath");
	      console.log(imgpath.replace(/www.catchme.global/i, "www.catchme.global:8080"));
	      console.log("imgthumbpath");
	      console.log(imgthumbpath.replace(/www.catchme.global/i, "www.catchme.global:8080"));
	      var newimgpath = imgpath.replace(/www.catchme.global/i, "www.catchme.global:8080");
	      var newimgthumbpath = imgthumbpath.replace(/www.catchme.global/i, "www.catchme.global:8080");
	      db.get().collection('users').update({'_id':curr_id}, {$set:{'image_path_full':newimgpath, 'image_path_thumb':newimgthumbpath}})
				console.log("done");
	});
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let array_with_duplcates = ['DELHI','NEWYORK','DELHI','GOA','MUMBAI','CALIFORNIA','GOA']
// /*Testing only methods*/
// exports.testingDupDataArray = function(array_with_duplcates)  {
// console.log('old array_with_duplcates');
// console.log(array_with_duplcates);
// function removeDuplicates(arr){
//     let unique_array = []
//     for(let i = 0;i < arr.length; i++){
//         if(unique_array.indexOf(arr[i]) == -1){
// 					console.log("++++++++IIII >>  "+ i);
//             unique_array.push(arr[i])
//         }
//     }
// 		console.log('New unique_array');
// 		console.log(unique_array);
//     return unique_array
// }
// removeDuplicates(array_with_duplcates);
// // console.log(removeDuplicates(array_with_duplcates));
// // [ 'DELHI', 'NEWYORK', 'GOA', 'MUMBAI', 'CALIFORNIA' ]
// }
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>NEW http://www.catchme.global/uploads
/*updae url methods*/
exports.updtUrlMeth_Pk = function()  {
	//  console.log(db.users.find().count());
	db.get().collection('users').find({'image_path_full':{'$regex': '.*/www.catchme.global/uploads/.*'}}).forEach(function( aRow ) {
	      var curr_id= aRow._id;
	      var imgpath= aRow.image_path_full;
	      var imgthumbpath= aRow.image_path_thumb;
	      console.log("imgpath");
	      console.log(imgpath.replace(/www.catchme.global/uploads/i, "www.catchme.global:8080/uploads"));
	      console.log("imgthumbpath");
	      console.log(imgthumbpath.replace(/www.catchme.global/uploads/i, "www.catchme.global:8080/uploads"));
	      var newimgpath = imgpath.replace(/www.catchme.global/uploads/i, "www.catchme.global:8080/uploads");
	      var newimgthumbpath = imgthumbpath.replace(/www.catchme.global/uploads/i, "www.catchme.global:8080/uploads");
	      db.get().collection('users').update({'_id':curr_id}, {$set:{'image_path_full':newimgpath, 'image_path_thumb':newimgthumbpath}})
				console.log("done");
	});
}


// for(reqPos in arrProf) {
//     console.log(index+":"+data[index]);
// }
// if ( a[index] !== undefined ) {
//
// }
// typeof a[index] !== 'undefined'


//>>>>>>>>>>>>>>>>>>>>>>>function.js
/*find data*/
exports.findDatabyId = function(TABLE,fileddata, callbacks)  {

var collection= db.get().collection(TABLE);
// collection.findOne(fileddata,
collection.findOne({_id:ObjectId(fileddata)},
				  function(err, result) {
					if(err){
							callbacks(err,null);
							} else {
							//callbacks(null, result.insertedIds[0]);
								callbacks(null,result);
						}

		}
	);
}

/*update image array IF already EXIST method*/
exports.updateImgArrayIndx = function(TABLE, criteriadata, fileddata, callbacks)  {


var collection= db.get().collection(TABLE);

	//console.log(field); return;
 collection.update({_id:ObjectId(criteriadata)},{$set:{"profile_photo":fileddata}},
				  function(err, result) {

					if(err){
							callbacks(err,null);
							} else {
								callbacks(null,result.result.nModified);

							}
		}
	);
}

//>>>>>>>>>>>>>>>>>>user-login.js


router.post('/profile_photo', ram, function(req, res) {

  console.log(req.body);

  var user_id = req.session.user_id != undefined ? req.session.user_id : "A125wer789aq";
  var photodata = [];
  var profileImageName;
  var newprofileimagename
  var alldata = {};
  var newProfdata =[];
  async.series({

    deleteprofile: function(callback) {
      var visiblefiled = {
        "image_path_full": 1,
        "image_path_thumb": 1,
        "_id": 0,
        "profile_image": 1
      }
      console.log('user_id');
      console.log(req.session.user_id);
      datamodule.findDatabyId('users', req.session.user_id, function(err, fetchedData) {
        if (err) {
          console.log(err);
        }
        // if (fetchedData != "" && fetchedData != null) {
          newProfdata.push(fetchedData);
          console.log('newProfdata');
          console.log(newProfdata);
        // }
      });
      datamodule.findDataFieldName('users', user_id, visiblefiled, function(err, deletedata) {
        if (err) callback(err, null);
        //console.log("heyeyeyeyeyeyeye5464646464664");
        //console.log(deletedata);
        //return;
        if (deletedata != "" && deletedata != null) {
          var datafile = 'uploads/' + deletedata.orignal_file_name != undefined && deletedata.orignal_file_name != null ? deletedata.orignal_file_name : 0;
          profileImageName = deletedata.profile_image + req.body.position;
          newprofileimagename = deletedata.profile_image;
          var location = req.file.path;
          var filemain = req.file.filename;
          console.log(filemain);
          //console.log(location);
          var destination = req.file.destination + "thumb";
          var destinationfull = req.file.destination + "full_size";
          //console.log(destination);
          console.log(profileImageName);
          Jimp.read(location, function(err, lenna) {
            if (err) throw err;

            lenna.resize(40, 40) // resize
              .quality(90) // set JPEG quality
              .write(destination + "/" + "profile_full_image_" + user_id + req.body.position + ".jpg"); // save

          });
          fs.createReadStream(location).pipe(fs.createWriteStream(destinationfull + '/' + "profile_full_image_" + user_id + req.body.position));

          if (fs.existsSync(datafile)) {
            fs.unlinkSync('uploads/' + deletedata.profile_image);
            //console.log(deletedata);
          }
        }
        alldata.deleteprofile = deletedata;
        callback(null, deletedata);
      });

    },
    updateuserimage: function(callback) {

      // if (req.body.position == "0") {
      console.log('newProfdata2222');
      console.log(newProfdata.length);
      console.log(newProfdata[0].profile_image);
      if (newProfdata[0].profile_image == undefined && newProfdata[0].profile_image == null) {
        console.log("me");
        console.log(user_id);
        //var newimagepath=;
        var fullpathpath = baseUrl + req.file.destination + "full_size/" + "profile_full_image_" + user_id + req.body.position;
        var thumbpathpath = baseUrl + req.file.destination + 'thumb/' + profileImageName + ".jpg";
        var dataforprofile = {
          "image_path_full": fullpathpath,
          "position": req.body.position
        }
        photodata.push(dataforprofile);
        if (newprofileimagename == undefined && newprofileimagename == null) {
          newprofileimagename="profile_full_image_"+req.session.user_id;
        }

        var data = {
          "profile_image": newprofileimagename,
          "orignal_file_name": req.file.filename,
          "image_path_full": fullpathpath,
          "image_path_thumb": "",
          "profile_photo": photodata
        }

        datamodule.updateDatabyId('users', user_id, data, function(err, userphoto) {
          if (err) callback(err, null);
          //fs.renameSync(location,destinationfull+"/"+"profilethuerwrwembimage.jpg");
          callback(null, userphoto)
        })
      } else {
        console.log('alldata');
        var newLenVarProfile=newProfdata[0].profile_photo;
        console.log(newLenVarProfile.length);
        console.log(newLenVarProfile);

        var fullpathpath = baseUrl + req.file.destination + "full_size/" + "profile_full_image_" + req.session.user_id + req.body.position;
        var thumbpathpath = baseUrl + req.file.destination + 'thumb/' + profileImageName + ".jpg";
        var dataforprofile = {
          "image_path_full": fullpathpath + req.body.position,
          "position": req.body.position
        }
        console.log('alldata.deleteprofile.profile_photo.length');
        console.log(newLenVarProfile.length);

        if (newLenVarProfile.length>0) {
          var profileVarLen=newLenVarProfile.length;
          var arrProf=newLenVarProfile;
          var reqPos=req.body.position;
          console.log('profileVarLen');
          console.log(profileVarLen);
          console.log('arrProf');
          console.log(reqPos);
          console.log(arrProf);
					var data = {
						"image_path_full": fullpathpath,
						"position": req.body.position
					}
					var chekFlag=false;
					var tt=3;
					arrProf.forEach( function(chkdataNew, index){
						console.log('chkdataNew.position');
						console.log(chkdataNew.position);
						console.log(index);
						if (chkdataNew.position==reqPos) {
							arrProf[index]=data;
						}
						// else {
						// 	arrProf.push(data);
						// }
						if(chkdataNew.position==tt){
							console.log('++++++++++++');
							arrProf.splice(2, 1);
							tt=99;
						}
					})
					console.log(chekFlag);
					if(chekFlag==false){
						arrProf.push(data);
					}
					console.log('arrProf nEW');
					console.log(arrProf);

					datamodule.updateImgArrayIndx('users', req.session.user_id, arrProf, function(err, userphotoUpdtInx) {
						if (err) callback(err, null);
						//fs.renameSync(location,destinationfull+"/"+"profilethuerwrwembimage.jpg");
						callback(null, userphotoUpdtInx)
					})


          if ( arrProf[Number(reqPos)] != undefined && arrProf[Number(reqPos)] != null) {
            if (arrProf[Number(reqPos)] != "") {
                var data = {
                  "image_path_full": fullpathpath,
                  "position": req.body.position
                }
                arrProf[Number(req.body.position)]=data;
                console.log('arrProf2222');
                console.log(arrProf);
              datamodule.updateImgArrayIndx('users', req.session.user_id, arrProf, function(err, userphotoUpdtInx) {
                if (err) callback(err, null);
                //fs.renameSync(location,destinationfull+"/"+"profilethuerwrwembimage.jpg");
                callback(null, userphotoUpdtInx)
              })

              // var data = {
              //   "image_path_full": fullpathpath,
              //   "position": profileVarLen+1
              // }
              //
              // datamodule.updateDataorinsertPushimage('users', req.session.user_id, data, function(err, userphoto) {
              //   if (err) callback(err, null);
              //   //fs.renameSync(location,destinationfull+"/"+"profilethuerwrwembimage.jpg");
              //   callback(null, userphoto)
              // })

            }else {
              var data = {
                "image_path_full": fullpathpath,
                "position": req.body.position
              }
              arrProf[Number(req.body.position)]=data;
              console.log('arrProf blank');
              console.log(arrProf);
            datamodule.updateImgArrayIndx('users', req.session.user_id, arrProf, function(err, userphotoUpdtInx) {
              if (err) callback(err, null);
              //fs.renameSync(location,destinationfull+"/"+"profilethuerwrwembimage.jpg");
              callback(null, userphotoUpdtInx)
            })
            }
          }
          else {
            var data = {
              "image_path_full": fullpathpath,
              "position": req.body.position
            }
            arrProf[Number(req.body.position)]=data;
            console.log('arrProf null');
            console.log(arrProf);
          datamodule.updateImgArrayIndx('users', req.session.user_id, arrProf, function(err, userphotoUpdtInx) {
            if (err) callback(err, null);
            //fs.renameSync(location,destinationfull+"/"+"profilethuerwrwembimage.jpg");
            callback(null, userphotoUpdtInx)
          })
          }
        }else {
          var data = {
            "image_path_full": fullpathpath,
            "position": req.body.position
          }
          datamodule.updateDataorinsertPushimage('users', req.session.user_id, data, function(err, userphoto) {
            if (err) callback(err, null);
            //fs.renameSync(location,destinationfull+"/"+"profilethuerwrwembimage.jpg");
            callback(null, userphoto)
          })
        }

        // console.log("mine");
        // console.log(alldata.deleteprofile.profile_image);
        // //return;
        //
        // var fullpathpath = baseUrl + req.file.destination + "full_size/" + "profile_full_image_" + user_id + req.body.position;
        // var thumbpathpath = baseUrl + req.file.destination + 'thumb/' + profileImageName + ".jpg";
        //
        //
        // var datanew = {
        //   "image_path_full": fullpathpath,
        //   "position": req.body.position
        // }
        // console.log("56465456464");
        // console.log(datanew);
        // datamodule.updateDataorinsertPushimage('users', user_id, datanew, function(err, userphoto) {
        //   if (err) callback(err, null);
        //   //fs.renameSync(location,destinationfull+"/"+"profilethuerwrwembimage.jpg");
        //   callback(null, userphoto)
        // })
      }
    },
    userprofile: function(callback) {
      var requirefiled = {};
      datamodule.findDataFieldName('users', user_id, requirefiled, function(err, getuser) {
        //console.log("adsadadasdsad");
        //console.log(getuser);
        //return;
        if (err) callback
        if (getuser != "" && getuser != null) {
          var maingetuser = {
            "_id": getuser._id != undefined ? getuser._id : "",
            "user_name": getuser.user_name != undefined ? getuser.user_name : "",
            "user_website": getuser.user_website != undefined ? getuser.user_website : "",
            "user_follow_me_link": getuser.user_follow_me_link != undefined ? getuser.user_follow_me_link : "",
            "location_status": getuser.location_status != undefined ? getuser.location_status : "",
            "image_path_full": getuser.image_path_full != undefined ? getuser.image_path_full : "",
            "image_path_thumb": getuser.image_path_thumb != undefined ? getuser.image_path_thumb : "",
            "user_about_us": getuser.user_about_us != undefined ? getuser.user_about_us : "",
            "user_email": getuser.user_email != undefined ? getuser.user_email : "",
            "user_mobile": getuser.user_mobile != undefined ? getuser.user_mobile : "",
            "user_gender": getuser.user_gender != undefined ? getuser.user_gender : "",
            "user_keyword": getuser.user_keyword != undefined ? getuser.user_keyword : "",
            "user_image": getuser.profile_photo != undefined ? getuser.profile_photo : "",
          }
          alldata.userprofile = maingetuser;
          callback()
        } else {
          alldata.userprofile = 0;
          callback();
        }
      })
    },
    findfirtentdata: function(callback) {
      //var id= req.session.user_id!=undefined?req.session.user_id:"";
      datamodule.DataListingAll('friend_list', user_id, function(err, newuserfrndlist) {
        if (err) callback(err);
        alldata.findfirtentdata = newuserfrndlist != "" && newuserfrndlist != null ? newuserfrndlist[0].friends_id : 0;
        callback();
      })
    },
    friendlist: function(callback) {
      var visiblefield = {
        "_id": 1,
        "user_name": 1
      };
      datamodule.findDataByMultiId('users', alldata.findfirtentdata, visiblefield, function(err, friednlistdetails) {
        if (err) callback(err);

        alldata.friendlist = friednlistdetails != null && friednlistdetails != "" ? friednlistdetails : 0;
        callback();

      });
    }
  }, function(err, result) {
    console.log("result.updateuserimage");
    console.log(result.updateuserimage);
    console.log(req.session.user_id);
    if (err) {
      response = {
        "status": "0",
        "message": "Error  data",
        "data": err
      };
      res.json(response);
    } else if (result.updateuserimage != 0) {
      //res.render('login/user_profile.html',{"message":"", "result":alldata, "title":"", "MetaTitle":"", "MetaDescription":"", "user_session":req.session.user_id})
      //response = {"status":"1", "message" : "Error  data","data":err};
      //res.json(response);
      res.redirect("http://localhost:3002/user/user_profile");
    } else {
      //res.render('login/user_profile.html',{"message":"", "result":alldata, "title":"", "MetaTitle":"", "MetaDescription":"", "user_session":req.session.user_id})
      res.redirect("http://localhost:3002/user/user_profile");
      //response = {"status":"1", "message" : "Error  data","data":err};
      //res.json(response);
    }
  })
});


//>>>>>>>>>>>>>>>>>>>>>>>>>>users.js>>>>


router.post('/profile_photo', ram, function(req, res) {


  if (req.body.user_id != undefined && req.body.position != undefined) {
    var imagedata;
    var photodata = [];
    var profileImageName;
    async.series({

      deleteprofile: function(callback) {
        var visiblefiled = {
          "image_path_full": 1,
          "image_path_thumb": 1,
          "_id": 0,
          "profile_image": 1
        }
        datamodule.findDataFieldName('users', req.body.user_id, visiblefiled, function(err, deletedata) {
          if (err) callback(err, null)

          if (deletedata != "" && deletedata != null) {
            var datafile = 'uploads/' + deletedata.orignal_file_name != undefined && deletedata.orignal_file_name != null ? deletedata.orignal_file_name : 0;
            profileImageName = deletedata.profile_image;

            var location = req.file.path;
            var filemain = req.file.filename;
            //console.log(filemain);
            //console.log(location);
            var destination = req.file.destination + "thumb";
            var destinationfull = req.file.destination + "full_size";
            //console.log(destination);
            if (req.body.position == "0") {
              Jimp.read(location, function(err, lenna) {
                if (err) throw err;

                lenna.resize(70, 70) // resize
                  .quality(90) // set JPEG quality
                  .write(destination + "/" + "profile_full_image_" + req.body.user_id + ".jpg"); // save

              });
            }
            fs.createReadStream(location).pipe(fs.createWriteStream(destinationfull + '/' + "profile_full_image_" + req.body.user_id + req.body.position));

            if (fs.existsSync(datafile)) {
              fs.unlinkSync('uploads/' + deletedata.profile_image);
              //console.log(deletedata);
            }
          }
          imagedata = deletedata;
          callback(null, deletedata);

        });
      },
      updateuserimage: function(callback) {
        if (imagedata.profile_image == undefined && imagedata.profile_image == null) {

          var fullpathpath = baseUrl + req.file.destination + "full_size/" + "profile_full_image_" + req.body.user_id + req.body.position;
          var thumbpathpath = baseUrl + req.file.destination + 'thumb/' + profileImageName + ".jpg";
          var dataforprofile = {
            "image_path_full": fullpathpath,
            "position": req.body.position
          }
          photodata.push(dataforprofile);

          if (profileImageName == undefined && profileImageName == null) {
            profileImageName="profile_full_image_"+req.body.user_id;
          }

          var data = {
            "profile_image": profileImageName,
            "orignal_file_name": req.file.filename,
            "image_path_full": fullpathpath,
            "profile_photo": photodata
          }

          datamodule.updateDatabyId('users', req.body.user_id, data, function(err, userphoto) {
            if (err) callback(err, null);
            //fs.renameSync(location,destinationfull+"/"+"profilethuerwrwembimage.jpg");
            callback(null, userphoto)
          })
        } else {
          var fullpathpath = baseUrl + req.file.destination + "full_size/" + "profile_full_image_" + req.body.user_id + req.body.position;
          var thumbpathpath = baseUrl + req.file.destination + 'thumb/' + profileImageName + ".jpg";
          var dataforprofile = {
            "image_path_full": fullpathpath + req.body.position,
            "position": req.body.position
          }
          console.log('imagedata.profile_photo.length');
          console.log(imagedata.profile_photo.length);

          if (imagedata.profile_photo.length>0) {
            var profileVarLen=imagedata.profile_photo.length;
            var arrProf=imagedata.profile_photo;
            var reqPos=req.body.position;
            console.log('profileVarLen');
            console.log(profileVarLen);
            console.log(arrProf);
            console.log(reqPos);
            if ( arrProf[Number(reqPos)] != undefined && arrProf[Number(reqPos)] != null) {
              if (arrProf[Number(reqPos)] != "") {
                  var data = {
                    "image_path_full": fullpathpath,
                    "position": req.body.position
                  }
                  arrProf[Number(req.body.position)]=data;
                  console.log('arrProf');
                  console.log(arrProf);
                datamodule.updateImgArrayIndx('users', req.body.user_id, arrProf, function(err, userphotoUpdtInx) {
                  if (err) callback(err, null);
                  //fs.renameSync(location,destinationfull+"/"+"profilethuerwrwembimage.jpg");
                  callback(null, userphotoUpdtInx)
                })

                // var data = {
                //   "image_path_full": fullpathpath,
                //   "position": profileVarLen+1
                // }
                //
                // datamodule.updateDataorinsertPushimage('users', req.body.user_id, data, function(err, userphoto) {
                //   if (err) callback(err, null);
                //   //fs.renameSync(location,destinationfull+"/"+"profilethuerwrwembimage.jpg");
                //   callback(null, userphoto)
                // })

              }else {
                var data = {
                  "image_path_full": fullpathpath,
                  "position": req.body.position
                }
                arrProf[Number(req.body.position)]=data;
                console.log('arrProf blank');
                console.log(arrProf);
              datamodule.updateImgArrayIndx('users', req.body.user_id, arrProf, function(err, userphotoUpdtInx) {
                if (err) callback(err, null);
                //fs.renameSync(location,destinationfull+"/"+"profilethuerwrwembimage.jpg");
                callback(null, userphotoUpdtInx)
              })
              }
            }
            else {
              var data = {
                "image_path_full": fullpathpath,
                "position": req.body.position
              }
              arrProf[Number(req.body.position)]=data;
              console.log('arrProf null');
              console.log(arrProf);
            datamodule.updateImgArrayIndx('users', req.body.user_id, arrProf, function(err, userphotoUpdtInx) {
              if (err) callback(err, null);
              //fs.renameSync(location,destinationfull+"/"+"profilethuerwrwembimage.jpg");
              callback(null, userphotoUpdtInx)
            })
            }

          }else {
            var data = {
              "image_path_full": fullpathpath,
              "position": req.body.position
            }

            datamodule.updateDataorinsertPushimage('users', req.body.user_id, data, function(err, userphoto) {
              if (err) callback(err, null);
              //fs.renameSync(location,destinationfull+"/"+"profilethuerwrwembimage.jpg");
              callback(null, userphoto)
            })
          }
        }
      },
      updatimagepath: function(callback) {

        if (req.body.position == "0") {
          console.log("hi");
          var fullpathpath = baseUrl + req.file.destination + "full_size/" + "profile_full_image_" + req.body.user_id + req.body.position;
          var fullpaththumb = baseUrl + req.file.destination + "thumb/" + "profile_full_image_" + req.body.user_id + ".jpg";

          var otherdata = {
            "image_path_thumb": fullpaththumb,
            "image_path_full": fullpathpath,
          }
          datamodule.updateDatabyId('users', req.body.user_id, otherdata, function(err, updatimagepathresult) {
            if (err) callback(err, null);
            //fs.renameSync(location,destinationfull+"/"+"profilethuerwrwembimage.jpg");
            callback(null, updatimagepathresult)
          })

        } else {

          callback();
        }


      },
      userdetails: function(callback) {

        var visiblefiled = {
          "profile_photo": 1,
          "_id": 0
        }
        datamodule.findDataFieldName('users', req.body.user_id, visiblefiled, function(err, userdetailsresult) {
          //console.log("userdetailsresult");
          //console.log(userdetailsresult);

          if (err) callback(err, null);
          if (userdetailsresult != "" || userdetailsresult != null) {

            var dataphoto = userdetailsresult.profile_photo.sort(function(a, b) {
              return parseFloat(a.position) - parseFloat(b.position);
            })
          } else {

            var dataphoto = 0
          }
          callback(null, userdetailsresult);
        })
      }

    }, function(err, result) {
      if (err) {
        response = {
          "status": "0",
          "message": "Error  data",
          "data": err
        };
        res.json(response);
      } else if (result.updateuserimage != 0) {

        response = {
          "status": "1",
          "message": "User profile image updated sucessfully",
          "position": req.body.position,
          "result": result.userdetails
        };
        res.json(response);

      } else {
        response = {
          "status": "1",
          "message": "User profile image updated sucessfully",
          "position": req.body.position,
          "result": result.userdetails
        };
        res.json(response);

      }

    })
  } else {
    response = {
      "status": "0",
      "message": "parameter is in correct"
    };
    res.json(response);
  }
});

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ index.js in route
var db = require('./../config.js');
var datamodule = require('./../module/function.js');
/* GET users listing. */

router.get('/', function(req, res, next){
  // var array_with_duplcates = ['DELHI','NEWYORK','DELHI','GOA','MUMBAI','CALIFORNIA','GOA','DELHI'];
  var idd='596c45e2218dec4232859c1a';
  console.log(idd);
  datamodule.testingDupDataArray();
  // datamodule.findDatabyId('users', idd, function(err, fetchedData) {
  //   if (err) {
  //     console.log(err);
  //   }
  //     console.log('fetchedData');
  //     console.log(fetchedData);
  //     datamodule.testingDupDataArray(fetchedData, array_with_duplcates);
  // });
    res.render('home/index.html', {"message":"", "title":"CatchMe : Real-Time GPS Tracking Mobile App and Family/Friend locator app", "MetaTitle":"", "MetaDescription":"Share your live location with CatchMe, Real-Time GPS Tracking Mobile App. Stay connected & safe always with this Family Locator App.", "user_session":req.session.user_id, "userDataProfile":req.session.userDataProfile});
});
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++function.js in module
var db = require('./../config.js');
var datamodule = require('./../module/function.js');
// datamodule.testingDupDataArray();
console.log("YESSSSS");
datamodule.getidszAll();



exports.getidszAll = function()  {
  var nettt=[];
   db.get().collection('users').find({}).forEach(function(item){
     console.log("iddd");
    console.log(item._id);
    nettt.push(item._id)
    return item._id;
  });
  setTimeout(function(){
    //  alert("Hello");
     console.log(nettt.length);
     console.log(nettt);
     console.log('done');
   }, 4000);
}


/*Testing only methods*/
// exports.testingDupDataArray = function(newval, array_duplcates)  {
exports.testingDupDataArray = function()  {
// console.log('old newval');
// console.log(newval);
// var collection= db.get().collection('users');
db.get().collection('users').find({"_id" : ObjectId("596c45e2218dec4232859c1a")}).forEach(function( newval ) {
      var curr_id= newval._id;
      console.log(curr_id);
      var imgpath= newval.profile_photo;
      console.log(" old image array and length");
      console.log(imgpath.length);
      console.log(imgpath);
        var dups = [];
        var arr = imgpath.filter(function(el) {
        // If it is not a duplicate, return true
        if (dups.indexOf(el.position) == -1) {
          dups.push(el.position);
          return true;
        }
        return false;
        });
        console.log('new data arr');
        console.log(arr);
      db.get().collection('users').update({'_id':curr_id}, {$set:{'profile_photo':arr}})
      console.log("done");
});

// var newdatamod=removeDuplicates(imgpath);
var newdd= removeDuplicates(array_duplcates);
console.log('newdd');
console.log(newdd);
function removeDuplicates(arr){
    let unique_array = []
    for(let i = 0;i < arr.length; i++){
        if(unique_array.indexOf(arr[i]) == -1){
					console.log("++++++++IIII >>  "+ i);
            unique_array.push(arr[i])
        }
    }
		console.log('New unique_array');
		console.log(unique_array);
    return unique_array
}
// console.log(removeDuplicates(array_with_duplcates));
// [ 'DELHI', 'NEWYORK', 'GOA', 'MUMBAI', 'CALIFORNIA' ]
}
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var userDataChkVr;
var user_id = req.session.user_id;
datamodule.NewfindDataToId('users', user_id, function(err, data) {
	if (err) {
		console.log(err);
	}
	console.log('checkAalReadyExitotp');
	console.log(data);
	userDataChkVr= data
	console.log('userDataChkVr');
	console.log(userDataChkVr);

if (userDataChkVr.is_profile == "1") {
	req.session.userDataProfile = userDataChkVr;
	console.log('userDataProfile');
	console.log(req.session.userDataProfile);
	}
});
