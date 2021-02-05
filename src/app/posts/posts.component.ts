import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  page = 1;
  pageSize = 10;

  posts;
  constructor(private route: ActivatedRoute, private postService: PostService) {
    this.route.data.subscribe(data => {
      this.posts = data;
      console.log(this.posts);
    })
  }
  ngOnInit(): void {
  }

}
