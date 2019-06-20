export interface ScriptDto {
  id: number;
  name: string;
  content: string;
  page: ScriptPageType;
  position: ScriptPositionType;
  device: ScriptDeviceType;
}

export type ScriptPageType = 'all' | 'order' | 'home' | 'page' | 'product' | 'blog' | 'before_bank';
export type ScriptPositionType = 'head' | 'after_begin_body' | 'before_end_body';
export type ScriptDeviceType = 'all' | 'desktop' | 'mobile';
