import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-singer",
  templateUrl: "./singer.component.html",
  styleUrls: ["./singer.component.css"]
})
export class SingerComponent implements OnInit {
  constructor(private http: HttpClient) {}
  isSelected:number;
  singerList: [];
  typeList =[
    {
      name:"华语男",
      id:1001
    },
    {
      name:"华语女",
      id:1002
    },
    {
      name:"华语组合",
      id:1003
    },
    {
      name:"欧美男",
      id:2001
    },
    {
      name:"欧美女",
      id:2002
    },
    {
      name:"欧美组合",
      id:2003
    },
    {
      name:"日本男",
      id:6001
    },
    {
      name:"日本女",
      id:6002
    },
    {
      name:"日本组合",
      id:6003
    },
    {
      name:"韩国男",
      id:7001
    },
    {
      name:"韩国女",
      id:7002
    },
    {
      name:"韩国组合",
      id:7003
    },
    {
      name:"其他男歌手",
      id:4001
    },
    {
      name:"其他女歌手",
      id:4001
    },
    {
      name:"其他组合",
      id:4001
    }
  ];
  ngOnInit() {
    this.http
      .get("http://47.105.150.105/m-api/top/artists?offset=0")
      .subscribe(res => {
        this.singerList = res["artists"];
      });
  }
  search(i,id){
    this.isSelected = i
    this.http.get('http://47.105.150.105/m-api/artist/list?cat='+ id +'&initial=&offset=0').subscribe(result =>{
      this.singerList = result['artists']
    })
  }
}