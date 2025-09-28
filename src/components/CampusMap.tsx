import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Heart, MessageCircle, Navigation } from 'lucide-react';

interface MapIssue {
  id: string;
  title: string;
  description: string;
  location: { x: number; y: number };
  category: 'facility' | 'inconvenience' | 'info' | 'congestion';
  likes: number;
  building: string;
}

const CampusMap = () => {
  const [issues, setIssues] = useState<MapIssue[]>([
    {
      id: '1',
      title: '엘리베이터 혼잡',
      description: '김수환관 엘리베이터가 너무 혼잡합니다',
      location: { x: 30, y: 40 },
      category: 'congestion',
      likes: 15,
      building: 'K관'
    },
    {
      id: '2',
      title: '안내판 부족',
      description: '니콜스관 입구에 안내판이 필요해요',
      location: { x: 60, y: 30 },
      category: 'info',
      likes: 8,
      building: 'N관'
    },
    {
      id: '3',
      title: '의자 부족',
      description: '마리아관 휴게공간에 의자가 부족합니다',
      location: { x: 45, y: 60 },
      category: 'facility',
      likes: 23,
      building: 'M관'
    }
  ]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'facility': return 'bg-blue-500';
      case 'inconvenience': return 'bg-orange-500';
      case 'info': return 'bg-green-500';
      case 'congestion': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'facility': return '시설';
      case 'inconvenience': return '불편';
      case 'info': return '안내';
      case 'congestion': return '혼잡';
      default: return '기타';
    }
  };

  const handleLike = (issueId: string) => {
    setIssues(prev => prev.map(issue => 
      issue.id === issueId 
        ? { ...issue, likes: issue.likes + 1 }
        : issue
    ));
  };

  return (
    <div className="h-full flex flex-col">
      <Card className="flex-1 shadow-campus">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-bold text-primary">
                가톨릭대학교 캠퍼스 지도
              </CardTitle>
              <CardDescription>
                실시간 캠퍼스 현황 및 이슈 확인
              </CardDescription>
            </div>
            <Button variant="default" size="sm" className="shadow-campus">
              <Plus className="w-4 h-4 mr-2" />
              이슈 등록
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="h-full">
          <div className="relative w-full h-96 bg-gradient-accent rounded-lg border-2 border-card-border overflow-hidden">
            {/* Campus Map Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-muted/50">
              {/* Building Labels */}
              <div className="absolute top-4 left-4 space-y-2">
                <div className="bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium shadow-campus">
                  김수환관 (K관)
                </div>
              </div>
              <div className="absolute top-4 right-4 space-y-2">
                <div className="bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium shadow-campus">
                  니콜스관 (N관)
                </div>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 space-y-2">
                <div className="bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium shadow-campus">
                  마리아관 (M관)
                </div>
              </div>
              <div className="absolute bottom-4 right-4 space-y-2">
                <div className="bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium shadow-campus">
                  밤비노관 (BA관)
                </div>
              </div>
            </div>

            {/* Issue Markers */}
            {issues.map((issue) => (
              <div
                key={issue.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ 
                  left: `${issue.location.x}%`, 
                  top: `${issue.location.y}%` 
                }}
              >
                <div className="relative group">
                  <div 
                    className={`w-4 h-4 ${getCategoryColor(issue.category)} rounded-full border-2 border-card shadow-campus cursor-pointer hover:scale-125 transition-campus`}
                  />
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <div className="bg-card border border-card-border rounded-lg p-3 shadow-campus-lg min-w-48">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {issue.building}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {getCategoryLabel(issue.category)}
                        </Badge>
                      </div>
                      <h4 className="font-medium text-sm mb-1">{issue.title}</h4>
                      <p className="text-xs text-muted-foreground mb-2">{issue.description}</p>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 px-2 text-xs"
                          onClick={() => handleLike(issue.id)}
                        >
                          <Heart className="w-3 h-3 mr-1" />
                          {issue.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                          <MessageCircle className="w-3 h-3 mr-1" />
                          댓글
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-4 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>시설 문제</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span>불편사항</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>안내 필요</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>혼잡도</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CampusMap;