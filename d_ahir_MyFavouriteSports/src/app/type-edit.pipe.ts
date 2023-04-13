import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { ContentListComponent } from './content-list/content-list.component';

@Pipe({
  name: 'typeEdit'
})
export class TypeEditPipe implements PipeTransform {

  transform(contentList: Content[], type?:string):Content[]{
  if(type){
    return contentList.filter(contentList => contentList?.type === type);
  }else if(type === ''){
   return contentList.filter(contentList => contentList?.type === '' )
  }
    else{
    return contentList.filter(contentList => contentList?.type);
  }
  }
}
