import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit{
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    const routeid=this.route.snapshot.paramMap.get('id');
    console.log("id:"+routeid);

}

}
