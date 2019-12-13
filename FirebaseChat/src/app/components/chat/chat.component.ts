import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  message:string=''
  constructor(
    private apichat:ChatService
  ) {
    this.apichat.loadingMessages().subscribe((messages:any[])=>{
      console.log(messages);
    },err=>{

    },()=>{
      console.log('completed');
    })
  }

  ngOnInit() {
  }
  sendMessage(){
    console.log(this.message);
  }
}
