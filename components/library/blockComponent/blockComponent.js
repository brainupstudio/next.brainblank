import ParagraphComponent from "../paragraphComponent/paragraphComponent"
import ComponentTitle from "../titleComponent/titleComponent"
import styles from './block.module.scss'

const ComponentBlock = (settings) => {
   let heightClass;
   switch(settings.data.Height) {
      case 'None':
         heightClass = ''
         break;
      case 'Small':
         heightClass = 'uk-height-small'
         break;
      case 'Medium':
         heightClass = 'uk-height-medium'
         break;
      case 'Large':
         heightClass = 'uk-height-large'
         break;
      case 'Viewport':
         heightClass = 'uk-height-1-1'
         break;
      default:
         heightClass = ''
   }

   let backgroundClass;
   switch(settings.data.BackgroundColor) {
      case 'None':
         backgroundClass = ''
         break;
      case 'Default':
         backgroundClass = ' uk-background-default '
         break;
      case 'Muted':
         backgroundClass = ' uk-background-muted '
         break;
      case 'Primary':
         backgroundClass = ' uk-background-primary '
         break;
      case 'Secondary':
         backgroundClass = ' uk-background-secondary '
         break;
      default:
         backgroundClass = ''
   }

   return (
      <div className={'uk-margin-medium-bottom ' + heightClass + backgroundClass + styles.c_block}>
         {settings.data.Title !== null ? <ComponentTitle data={settings.data.Title} index={settings.index} /> : false}
         {settings.data.Paragraph !== null ?<ParagraphComponent data={settings.data.Paragraph} index={settings.index}/> : false}
      </div>
   )
}

export default ComponentBlock