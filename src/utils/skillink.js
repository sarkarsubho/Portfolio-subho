
import {ExpressJS,bootstrap,css,html,javascript,mongoDB,nodejs,react} from "../assets/links/link"


export const skillink = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
      
        case 'html':
            return html;
       
        case 'css':
            return css;
      
        case 'javascript':
            return javascript;
       
        case 'react':
            return react;
     
        case 'bootstrap':
            return bootstrap;
       
        case 'nodejs':
            return nodejs;
      
        case 'mongodb':
            return mongoDB;
       
        case ExpressJS:
            return 'ExpressJS';
        
        
        default:
            break;
    }
}
