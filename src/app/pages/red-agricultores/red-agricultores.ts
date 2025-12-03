import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../pipes/translate.pipe';

interface FarmerPost {
  id: number;
  author: string;
  avatar: string;
  categoryKey: string;
  titleKey?: string;
  bodyKey?: string;
  title?: string;
  body?: string;
  likes: number;
  comments: number;
  timeAgoKey?: string;
  isUser?: boolean;
}

@Component({
  selector: 'app-red-agricultores',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './red-agricultores.html',
  styleUrl: './red-agricultores.css'
})
export class RedAgricultoresComponent {
  categoryOptions = [
    { value: 'red.category.irrigation', labelKey: 'red.category.irrigation' },
    { value: 'red.category.market', labelKey: 'red.category.market' },
    { value: 'red.category.alerts', labelKey: 'red.category.alerts' },
    { value: 'red.category.community', labelKey: 'red.category.community' }
  ];

  seedPosts: FarmerPost[] = [
    {
      id: 1,
      author: 'Juan Pérez',
      avatar: 'J',
      categoryKey: 'red.inIrrigation',
      titleKey: 'red.postTitle',
      bodyKey: 'red.postContent',
      likes: 15,
      comments: 7
    }
  ];

  userPosts: FarmerPost[] = [];
  newPostContent = '';
  selectedCategory = this.categoryOptions[0].value;
  feedbackKey: string | null = null;

  get posts(): FarmerPost[] {
    return [...this.userPosts, ...this.seedPosts];
  }

  publishPost(): void {
    const content = this.newPostContent.trim();
    if (!content) {
      return;
    }

    const title = content.split('\n')[0];

    const newPost: FarmerPost = {
      id: Date.now(),
      author: 'SmartFarmer',
      avatar: 'S',
      categoryKey: this.selectedCategory,
      title: title.length > 80 ? `${title.slice(0, 77)}…` : title,
      body: content,
      likes: 0,
      comments: 0,
      timeAgoKey: 'red.justNow',
      isUser: true
    };

    this.userPosts = [newPost, ...this.userPosts];
    this.newPostContent = '';
    this.feedbackKey = 'red.newPostSuccess';
    setTimeout(() => (this.feedbackKey = null), 4000);
  }
}
