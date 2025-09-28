import { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import CampusMap from './CampusMap';
import ContactSection from './ContactSection';
import QuickLinksSection from './QuickLinksSection';
import ElevatorStatus from './ElevatorStatus';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type ActiveSection = 'map' | 'contacts' | 'links' | 'elevators' | 'welfare' | 'benefits' | 'programs' | 'online';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState<ActiveSection>('map');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'map':
        return <CampusMap />;
      case 'contacts':
        return <ContactSection />;
      case 'links':
        return <QuickLinksSection />;
      case 'elevators':
        return <ElevatorStatus />;
      case 'welfare':
        return (
          <Card className="h-full">
            <CardHeader>
              <CardTitle>복지 시설 위치</CardTitle>
              <CardDescription>장애인 복지시설, 보건실, 상담실 등</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">복지 시설 정보가 여기에 표시됩니다.</p>
            </CardContent>
          </Card>
        );
      case 'benefits':
        return (
          <Card className="h-full">
            <CardHeader>
              <CardTitle>학생 혜택 & 장학금</CardTitle>
              <CardDescription>부속병원 할인, 장학금 정보 등</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">학생 혜택 정보가 여기에 표시됩니다.</p>
            </CardContent>
          </Card>
        );
      case 'programs':
        return (
          <Card className="h-full">
            <CardHeader>
              <CardTitle>프로그램 & 행사</CardTitle>
              <CardDescription>교내 행사 및 학생 지원 프로그램</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">프로그램 정보가 여기에 표시됩니다.</p>
            </CardContent>
          </Card>
        );
      case 'online':
        return (
          <Card className="h-full">
            <CardHeader>
              <CardTitle>온라인 지원 시스템</CardTitle>
              <CardDescription>트리니티 AI, 비교과 프로그램 등</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">온라인 시스템 정보가 여기에 표시됩니다.</p>
            </CardContent>
          </Card>
        );
      default:
        return <CampusMap />;
    }
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gradient-light">
        <AppSidebar 
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        <main className="flex-1 p-6">
          <div className="h-full">
            {renderActiveSection()}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;