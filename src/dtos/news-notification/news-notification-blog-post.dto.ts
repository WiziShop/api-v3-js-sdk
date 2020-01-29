import { NewsNotificationBlogPostVisualDTO } from './news-notification-blog-post-visual.dto';

export class NewsNotificationBlogPostDTO {
  title: string;
  uri: string;
  visual: NewsNotificationBlogPostVisualDTO;
  meta_desc: string;
  published_at: string;
}
