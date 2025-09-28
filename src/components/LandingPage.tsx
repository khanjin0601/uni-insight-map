import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Users, Phone, ExternalLink } from 'lucide-react';
import LoginModal from './LoginModal';
import catholicLogo from '@/assets/catholic-university-logo.png';
interface LandingPageProps {
  onLoginSuccess?: () => void;
}
const LandingPage = ({
  onLoginSuccess
}: LandingPageProps) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const features = [{
    icon: <MapPin className="w-6 h-6 text-primary" />,
    title: "캠퍼스 지도 시각화",
    description: "실시간 캠퍼스 시설 현황과 불편사항을 한눈에 확인하세요"
  }, {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "학생-교직원 소통",
    description: "다양한 캠퍼스 이슈에 대해 함께 소통하고 개선방안을 공유하세요"
  }, {
    icon: <Phone className="w-6 h-6 text-primary" />,
    title: "원스톱 연락처",
    description: "교무처, 학생지원, 시설관리 등 주요 부서 연락처를 쉽게 찾아보세요"
  }, {
    icon: <ExternalLink className="w-6 h-6 text-primary" />,
    title: "바로가기 링크",
    description: "트리니티, 사이버캠퍼스 등 자주 사용하는 서비스에 바로 접속하세요"
  }];
  return <div className="min-h-screen bg-gradient-light">
      {/* Header */}
      <header className="border-b border-card-border bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={catholicLogo} alt="Catholic University Logo" className="w-10 h-10 object-contain" />
            <div>
              <h1 className="text-xl font-bold text-primary">가톨릭대학교</h1>
              <p className="text-sm text-muted-foreground">캠퍼스 서포트 플랫폼</p>
            </div>
          </div>
          <Button variant="campus" onClick={() => setIsLoginOpen(true)} className="shadow-campus-lg">
            로그인
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              스마트한 캠퍼스 라이프,<br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                더 나은 대학생활
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">가톨릭대학교 학생과 교직원을 위한 서포트 플랫폼입니다. 캠퍼스 지도 기반으로 실시간 정보를 공유하고, 더 편리한 대학생활을 만들어보세요.</p>
            <Button variant="campus" size="xl" onClick={() => setIsLoginOpen(true)} className="shadow-campus-lg hover:scale-105 transition-all duration-300">
              시작하기
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-primary mb-12">
            주요 기능
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => <Card key={index} className="shadow-campus hover:shadow-campus-lg transition-campus border-card-border">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 mx-auto mb-4 bg-accent rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-primary-foreground mb-6">
              지금 바로 시작해보세요
            </h3>
            <p className="text-lg text-primary-foreground/90 mb-8">
              가톨릭대학교 구성원이면 누구나 사용할 수 있습니다
            </p>
            <Button variant="outline" size="xl" onClick={() => setIsLoginOpen(true)} className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground">
              로그인하고 시작하기
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-card-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <img src={catholicLogo} alt="Catholic University Logo" className="w-8 h-8 object-contain" />
              <span className="text-primary font-semibold">가톨릭대학교 캠퍼스 플랫폼</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 Catholic University of Korea. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} onLoginSuccess={onLoginSuccess} />
    </div>;
};
export default LandingPage;