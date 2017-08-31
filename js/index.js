
function goTop() {
    var targetOffset = $("#page-top").offset().top;
    $('html,body').animate({scrollTop: targetOffset},1);
}

$(document).ready(goTop);


/* Login */
var app = angular.module('myApp',[]);
app.directive('mMail', function(){
  return {
    require: 'ngModel',
    link: function(scope, element, attr, mCtrl){
      function mValidation(value) {
        var a = value.indexOf('@');
        var p = value.lastIndexOf('.');
        if(a < 1 || p - a < 2 || value.length - p < 2 || p == -1){
            document.getElementById('eemail').innerHTML = "Incorect format";
            mCtrl.$setValidity('mail',false);
        } else{
          document.getElementById('eemail').innerHTML = "";
          mCtrl.$setValidity('mail',true);
        }
        return value;
      }
      mCtrl.$parsers.push(mValidation);
    }
  };
});


app.directive('mPasssword', function() {
      return {
          require: 'ngModel',
          link: function(scope, element, attr, mCtrl) {
              function mValidation(value) {
                  var m = 0;
                  var n = 0;

                  for (var i = 0; i < value.length; i++) {
                      if(value.charCodeAt(i) > 64 && value.charCodeAt(i) < 91){
                          m = 1;
                      }else if(value.charCodeAt(i) > 47 && value.charCodeAt(i) < 57){
                          n = 1;
                      }
                  }

                  if(!m){
                      document.getElementById('mypass').innerHTML = "Must have at least an uppercase letter";
                      mCtrl.$setValidity('passs', false);
                  }
                  if(!n){
                      document.getElementById('mypass').innerHTML = "Must have at least one number";
                      mCtrl.$setValidity('passs', false);
                  }

                  if(n&&m){
                      document.getElementById('mypass').innerHTML = "";
                      mCtrl.$setValidity('passs', true);
                  }
                  return value;
              }
              mCtrl.$parsers.push(mValidation);
          }
      };
  });


 /* registro */


   app.directive('mName',function(){
     return{
       require: 'ngModel',
       link: function(scope,element,attr,mCtrl){
         function mValidation(value){
           var aux = 0;
           for (var i = 0; i < value.length; i++) {
               if(value.charCodeAt(i) < 65 || value.charCodeAt(i) > 122){
                   document.getElementById('ename').innerHTML = "Can not contain numbers or special characters";
                   mCtrl.$setValidity('name', false);
                   aux=1;
               }
           }
           if (!aux) {
             document.getElementById('ename').innerHTML = "";
             mCtrl.$setValidity('name', true);
           }
           return value;
         }
         mCtrl.$parsers.push(mValidation);
       }
     };
   });

   app.directive('mFirst',function(){
     return{
       require: 'ngModel',
       link: function(scope,element,attr,mCtrl){
         function mValidation(value){
           var aux = 0;
           for (var i = 0; i < value.length; i++) {
               if(value.charCodeAt(i) < 65 || value.charCodeAt(i) > 122){
                   document.getElementById('efname').innerHTML = "Can not contain numbers or special characters";
                   mCtrl.$setValidity('first', false);
                   aux=1;
               }
           }
           if (!aux) {
             document.getElementById('efname').innerHTML = "";
             mCtrl.$setValidity('name', true);
           }
           return value;
         }
         mCtrl.$parsers.push(mValidation);
       }
     };
   });

   app.directive('mEmail', function(){
     return {
       require: 'ngModel',
       link: function(scope, element, attr, mCtrl){
         function mValidation(value) {
           var a = value.indexOf('@');
           var p = value.lastIndexOf('.');
           if(a < 1 || p - a < 2 || value.length - p < 2 || p == -1){
               document.getElementById('email').innerHTML = "Incorect format";
               mCtrl.$setValidity('mail',false);
           } else{
             document.getElementById('email').innerHTML = "";
             mCtrl.$setValidity('mail',true);
           }
           return value;
         }
         mCtrl.$parsers.push(mValidation);
       }
     };
   });

   app.directive('mPassword', function() {
         return {
             require: 'ngModel',
             link: function(scope, element, attr, mCtrl) {
                 function mValidation(value) {
                     var m = 0;
                     var n = 0;

                     for (var i = 0; i < value.length; i++) {
                         if(value.charCodeAt(i) > 64 && value.charCodeAt(i) < 91){
                             m = 1;
                         }else if(value.charCodeAt(i) > 47 && value.charCodeAt(i) < 57){
                             n = 1;
                         }
                     }

                     if(!m){
                         document.getElementById('mipass').innerHTML = "Must have at least an uppercase letter";
                         mCtrl.$setValidity('pass', false);
                     }
                     if(!n){
                         document.getElementById('mipass').innerHTML = "Must have at least one number";
                         mCtrl.$setValidity('pass', false);
                     }

                     if(n&&m){
                         document.getElementById('mipass').innerHTML = "";
                         mCtrl.$setValidity('pass', true);
                     }
                     return value;
                 }
                 mCtrl.$parsers.push(mValidation);
             }
         };
     });
