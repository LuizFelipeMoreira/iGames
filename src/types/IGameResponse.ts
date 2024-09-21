export interface Response {
  count: number;
  next: string;
  results: IGameResponseType[];
}

export interface IGameResponseType {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  rating: number;
  platforms: PlatformElement[];
  short_screenshots: ShortScreenshot[];
}

export interface PlatformElement {
  platform: PlatformPlatform;
  released_at: Date;
}

export interface PlatformPlatform {
  id: number;
  name: string;
  slug: string;
  image: null;
  year_end: null;
  year_start: number | null;
  games_count: number;
  image_background: string;
}

export interface ShortScreenshot {
  id: number;
  image: string;
}
