import { MapPin, Phone, ExternalLink, Building2, Heart, Gift, Calendar, Globe } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import catholicLogo from '@/assets/catholic-university-logo.png';

type ActiveSection = 'map' | 'contacts' | 'links' | 'elevators' | 'welfare' | 'benefits' | 'programs' | 'online';

interface AppSidebarProps {
  activeSection: ActiveSection;
  onSectionChange: (section: ActiveSection) => void;
}

const menuItems = [
  { 
    id: 'map' as const, 
    title: '캠퍼스 지도', 
    icon: MapPin,
    description: '실시간 지도 및 시설 현황'
  },
  { 
    id: 'elevators' as const, 
    title: '엘리베이터 현황', 
    icon: Building2,
    description: '실시간 혼잡도 확인'
  },
  { 
    id: 'contacts' as const, 
    title: '연락처', 
    icon: Phone,
    description: '교무처, 학생지원 등'
  },
  { 
    id: 'links' as const, 
    title: '바로가기', 
    icon: ExternalLink,
    description: '트리니티, 사이버캠퍼스'
  },
  { 
    id: 'welfare' as const, 
    title: '복지시설', 
    icon: Heart,
    description: '보건실, 상담실 위치'
  },
  { 
    id: 'benefits' as const, 
    title: '학생혜택', 
    icon: Gift,
    description: '장학금, 할인 정보'
  },
  { 
    id: 'programs' as const, 
    title: '프로그램', 
    icon: Calendar,
    description: '교내 행사 및 지원'
  },
  { 
    id: 'online' as const, 
    title: '온라인 지원', 
    icon: Globe,
    description: 'AI 코디, 비교과'
  },
];

export function AppSidebar({ activeSection, onSectionChange }: AppSidebarProps) {
  const { open } = useSidebar();

  return (
    <Sidebar className={open ? "w-72" : "w-14"} collapsible="icon">
      <SidebarTrigger className="m-2 self-end" />
      
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <img 
            src={catholicLogo} 
            alt="Catholic University Logo" 
            className="w-8 h-8 object-contain flex-shrink-0"
          />
          {open && (
            <div>
              <h2 className="font-bold text-sidebar-primary text-sm">가톨릭대학교</h2>
              <p className="text-xs text-sidebar-foreground/70">캠퍼스 플랫폼</p>
            </div>
          )}
        </div>
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>메인 메뉴</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton 
                    asChild
                    className={`cursor-pointer transition-campus ${
                      activeSection === item.id 
                        ? 'bg-sidebar-accent text-sidebar-primary font-medium shadow-campus' 
                        : 'hover:bg-sidebar-accent/50'
                    }`}
                  >
                    <div onClick={() => onSectionChange(item.id)}>
                      <item.icon className="w-4 h-4 flex-shrink-0" />
                      {open && (
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">{item.title}</span>
                          <span className="text-xs text-sidebar-foreground/70">
                            {item.description}
                          </span>
                        </div>
                      )}
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}