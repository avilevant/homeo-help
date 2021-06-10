import { Plugins } from '@capacitor/core';
const { Share } = Plugins;

let ShareRet =()=>{
     Share.share({
        title: 'Natural First Aid',
        text: 'The Best App To Have When Things Go Wrong',
        url: 'https://homeo-help.web.app',
        dialogTitle: 'Share with buddies'
      });
} 
    


export default ShareRet;