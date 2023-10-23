export type DashboardMenuType = 'list' | 'item' | 'new';

// 게시판 아이템 정보
export interface BoardItemType {
  id: number;
  title: string;
  content: string;
  time: string;
}

// 게시판 글 상세 정보
export interface BoardItemDetailType {
  id: number;
  writerInfo: {
    profileUrl: string;
    name: string;
  };
  title: string;
  content: string; // from editor
  time: string;
  comments: any[];
}

// 대시보드 메인
export interface DashboardHomeInfo {
  pid: number;
  title: string;
  description: string;
  boards: BoardItemType[];
  gallerys: any[];
  members: any[];
}
