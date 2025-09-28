import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Globe, BookOpen, GraduationCap, Users, Coffee, Instagram, Facebook } from 'lucide-react';

interface QuickLink {
  title: string;
  description: string;
  url: string;
  category: 'academic' | 'service' | 'social' | 'external';
  icon: React.ReactNode;
  isPopular?: boolean;
}

const QuickLinksSection = () => {
  const quickLinks: QuickLink[] = [
    {
      title: '트리니티',
      description: '종합정보시스템 - 수강신청, 성적조회',
      url: 'https://trinity.catholic.ac.kr',
      category: 'academic',
      icon: <GraduationCap className="w-5 h-5" />,
      isPopular: true
    },
    {
      title: '사이버캠퍼스',
      description: '온라인 강의 및 과제 제출',
      url: 'https://cyber.catholic.ac.kr',
      category: 'academic',
      icon: <BookOpen className="w-5 h-5" />,
      isPopular: true
    },
    {
      title: '가톨릭대 공유대학',
      description: '타 대학과의 공동 교육과정',
      url: 'https://share.catholic.ac.kr',
      category: 'academic',
      icon: <Users className="w-5 h-5" />
    },
    {
      title: '가톨릭대학교 홈페이지',
      description: '공식 대학 홈페이지',
      url: 'https://www.catholic.ac.kr',
      category: 'external',
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: '중앙도서관',
      description: '도서 검색 및 열람실 예약',
      url: 'https://lib.catholic.ac.kr',
      category: 'service',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: '학생식당 메뉴',
      description: '오늘의 식단 및 운영시간',
      url: 'https://food.catholic.ac.kr',
      category: 'service',
      icon: <Coffee className="w-5 h-5" />
    }
  ];

  const socialLinks = [
    {
      title: '총학생회',
      description: '@cuks_student_council',
      url: 'https://instagram.com/cuks_student_council',
      icon: <Instagram className="w-4 h-4" />
    },
    {
      title: '인문대학',
      description: '@cuks_humanities',
      url: 'https://instagram.com/cuks_humanities',
      icon: <Instagram className="w-4 h-4" />
    },
    {
      title: '정경대학',
      description: '@cuks_politics_economics',
      url: 'https://instagram.com/cuks_politics_economics',
      icon: <Instagram className="w-4 h-4" />
    },
    {
      title: '가톨릭대 공식',
      description: '@cuks_official',
      url: 'https://instagram.com/cuks_official',
      icon: <Instagram className="w-4 h-4" />
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'academic': return 'bg-blue-100 text-blue-800';
      case 'service': return 'bg-green-100 text-green-800';
      case 'social': return 'bg-purple-100 text-purple-800';
      case 'external': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'academic': return '학사';
      case 'service': return '서비스';
      case 'social': return '소셜';
      case 'external': return '공식';
      default: return '기타';
    }
  };

  const handleLinkClick = (url: string, title: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-campus">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl font-bold text-primary">
            <ExternalLink className="w-6 h-6" />
            바로가기 링크
          </CardTitle>
          <CardDescription>
            자주 사용하는 가톨릭대학교 온라인 서비스 모음
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Quick Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quickLinks.map((link, index) => (
          <Card key={index} className="shadow-campus hover:shadow-campus-lg transition-campus cursor-pointer group">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-campus">
                    {link.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      {link.title}
                      {link.isPopular && (
                        <Badge variant="destructive" className="text-xs px-2">
                          인기
                        </Badge>
                      )}
                    </CardTitle>
                  </div>
                </div>
                <Badge className={getCategoryColor(link.category)}>
                  {getCategoryLabel(link.category)}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-3">
              <CardDescription className="text-sm">
                {link.description}
              </CardDescription>
              
              <Button
                variant="outline"
                size="sm"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-campus"
                onClick={() => handleLinkClick(link.url, link.title)}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                바로가기
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Social Media Links */}
      <Card className="shadow-campus">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl font-bold text-primary">
            <Instagram className="w-5 h-5" />
            교내 대표 기구 SNS
          </CardTitle>
          <CardDescription>
            학생회 및 단과대학 공식 인스타그램 계정
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {socialLinks.map((social, index) => (
              <Card key={index} className="shadow-campus hover:shadow-campus-lg transition-campus cursor-pointer group border-purple-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                      {social.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{social.title}</p>
                      <p className="text-xs text-muted-foreground">{social.description}</p>
                    </div>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full mt-3 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600 group-hover:text-white transition-campus"
                    onClick={() => handleLinkClick(social.url, social.title)}
                  >
                    팔로우하기
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI 지원 도구 */}
      <Card className="shadow-campus border-blue-200 bg-blue-50/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl font-bold text-blue-800">
            🤖 AI 지원 도구
          </CardTitle>
          <CardDescription className="text-blue-600">
            트리니티 AI 코디 및 진로탐색 도구
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="shadow-campus border-blue-200">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">트리니티 AI 코디</h4>
                    <p className="text-sm text-muted-foreground">AI 기반 수강신청 도우미</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => handleLinkClick('https://trinity.catholic.ac.kr/ai', 'AI 코디')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  AI 코디 사용하기
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-campus border-green-200">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">진로탐색 플랫폼</h4>
                    <p className="text-sm text-muted-foreground">온라인 진로 상담 및 검사</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => handleLinkClick('https://career.catholic.ac.kr', '진로탐색')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  진로탐색 시작하기
                </Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickLinksSection;