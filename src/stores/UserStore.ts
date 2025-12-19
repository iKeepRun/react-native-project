import { request } from '../utils/request.ts';
import {flow} from "mobx";

import storage from "../utils/Storage.ts";
interface UserInfo {
  name: string;
  avatar: string;
  roles: string[];
}

class UserStore {
  userInfo: UserInfo|null=null;
  // getUserInfo= async (phone: string, pwd: string, callback: (success:boolean)=>void) => {
  //   try{
  //         const {data} = await request("login",{
  //            name:phone,
  //             pwd:pwd
  //         });
  //         if(data){
  //           this.userInfo= data;
  //           callback(true);
  //         }else{
  //           this.userInfo=null
  //           callback(false);
  //         }
  //   }catch(e){
  //      console.error(e)
  //      callback(false);
  //      this.userInfo=null
  //   }
  //
  // }
     getUserInfo=flow (
         function *getUserInfo(this :UserStore,phone: string, pwd: string, callback: (success:boolean)=>void) {
             try{
                 const {data} = yield request("login",{
                     name:phone,
                     pwd:pwd
                 });
                 if(data){
                     storage.save("userInfo",data);
                     this.userInfo= data;
                     callback(true);
                 }else{
                     this.userInfo=null
                     callback(false);
                 }
             }catch(e) {
                 console.error(e)
                 callback(false);
                 this.userInfo = null
             }
         }
     )
}



export default  new UserStore();