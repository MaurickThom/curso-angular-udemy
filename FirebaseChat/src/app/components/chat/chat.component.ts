import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit,AfterViewInit ,AfterContentInit{

  message:string=''
  element:HTMLElement
  constructor(
    protected apichat:ChatService
    ) {
      this.apichat.loadingMessages().subscribe(()=>{
        setTimeout(()=>{
          console.log('message');
          this.element.scrollTop = this.element.scrollHeight;
        },20)
      })
    }

    ngAfterContentInit(): void {
    }
    ngAfterViewInit(): void {
      this.element = document.getElementById('app-messages')
    }
    ngOnInit() {
    console.log('oninit');
    // this.element.scrollTop = this.element.scrollHeight;
  }
  sendMessage(){
    console.log(this.message);
    if(!this.message.trim().length)
      return
    this.apichat.addMessages(this.message)
      .then(()=>{
        this.message = ""
        console.log('mensaje enviado');
      })
      .catch(err=>{
        console.log('error al enviar ',err);
      })
  }
}
