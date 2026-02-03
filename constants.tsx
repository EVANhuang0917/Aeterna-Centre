
import { OfficeType, Amenity, OfficeLocation } from './types';

export const OFFICE_TYPES: OfficeType[] = [
  {
    id: 'private',
    title: '私人辦公室',
    description: '專為追求隱私與高品質辦公環境的企業設計。',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800',
    price: 'NT$ 15,000 起 / 月',
    features: ['獨立空調', '24小時門禁', '專屬門牌', '頂級辦公家具']
  },
  {
    id: 'coworking',
    title: '共享座位',
    description: '靈活的工作空間，適合自由職業者與初創團隊。',
    image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=800',
    price: 'NT$ 4,500 起 / 月',
    features: ['靈活入座', '高速網絡', '社群交流機會', '免費咖啡']
  },
  {
    id: 'virtual',
    title: '虛擬進駐',
    description: '提供商業地址登記與代收郵件服務，提升專業形象。',
    image: 'https://images.unsplash.com/photo-1497215842964-2229243e558c?auto=format&fit=crop&q=80&w=800',
    price: 'NT$ 2,500 起 / 月',
    features: ['黃金商業地址', '代收信件包裹', '秘書接聽服務', '會議室折扣']
  }
];

export const AMENITIES: Amenity[] = [
  { id: 'wifi', icon: 'Wifi', title: '高速光纖', description: '企業級對等頻寬。' },
  { id: 'coffee', icon: 'Coffee', title: '職人咖啡', description: '無限量精品豆供應。' },
  { id: 'security', icon: 'Shield', title: '全天候安管', description: '智慧門禁系統。' },
  { id: 'meeting', icon: 'Users', title: '商務會議室', description: '雲端會議設備。' },
  { id: 'printer', icon: 'Printer', title: '行政資源', description: '全能事務支援。' },
  { id: 'location', icon: 'MapPin', title: '核心樞紐', description: '捷運站出口即達。' }
];

export const LOCATIONS: OfficeLocation[] = [
  {
    id: 'xinyi',
    name: '信義旗艦館',
    area: '台北核心區',
    description: '緊鄰 101，最尊榮的指標性商業地址。',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200',
    mrt: '台北101/世貿站',
    distance: '步行 2 分鐘'
  },
  {
    id: 'neihu-ruiguang',
    name: '內湖瑞光館',
    area: '內科心臟地帶',
    description: '科技精英雲集，現代感十足的挑高設計。',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800',
    mrt: '港墘站',
    distance: '步行 5 分鐘'
  }
];
