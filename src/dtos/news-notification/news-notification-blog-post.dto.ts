export interface NewsNotificationBlogPostDTO {
  title: string;
  uri: string;
  visual: visual;
  meta_desc: string;
  published_at: string;
}

interface visual {
  miniature: miniature;
}

interface miniature {
  min410: string;
  min620: string;
  min870: string;
  min1240: string;
}
