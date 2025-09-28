import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building2, Clock, Users, TrendingUp } from 'lucide-react';

interface ElevatorData {
  building: string;
  buildingKorean: string;
  floor: string;
  status: 'available' | 'moderate' | 'busy';
  waitTime: number;
  peopleCount: number;
  lastUpdated: string;
}

const ElevatorStatus = () => {
  const elevatorData: ElevatorData[] = [
    {
      building: 'K',
      buildingKorean: '김수환관',
      floor: '1-8층',
      status: 'busy',
      waitTime: 5,
      peopleCount: 12,
      lastUpdated: '방금 전'
    },
    {
      building: 'M',
      buildingKorean: '마리아관',
      floor: '1-6층',
      status: 'moderate',
      waitTime: 2,
      peopleCount: 6,
      lastUpdated: '1분 전'
    },
    {
      building: 'N',
      buildingKorean: '니콜스관',
      floor: '1-5층',
      status: 'available',
      waitTime: 0,
      peopleCount: 2,
      lastUpdated: '방금 전'
    },
    {
      building: 'BA',
      buildingKorean: '밤비노관',
      floor: '1-4층',
      status: 'moderate',
      waitTime: 3,
      peopleCount: 8,
      lastUpdated: '2분 전'
    }
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'available':
        return {
          color: 'bg-elevator-green',
          textColor: 'text-success-foreground',
          label: '원활',
          icon: '🟢'
        };
      case 'moderate':
        return {
          color: 'bg-elevator-yellow',
          textColor: 'text-warning-foreground',
          label: '보통',
          icon: '🟡'
        };
      case 'busy':
        return {
          color: 'bg-elevator-red',
          textColor: 'text-destructive-foreground',
          label: '혼잡',
          icon: '🔴'
        };
      default:
        return {
          color: 'bg-muted',
          textColor: 'text-muted-foreground',
          label: '알 수 없음',
          icon: '⚪'
        };
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'available': return 'default';
      case 'moderate': return 'secondary';
      case 'busy': return 'destructive';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-campus">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl font-bold text-primary">
            <Building2 className="w-6 h-6" />
            엘리베이터 실시간 현황
          </CardTitle>
          <CardDescription>
            캠퍼스 내 주요 건물의 엘리베이터 혼잡도를 실시간으로 확인하세요
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {elevatorData.map((elevator) => {
          const statusConfig = getStatusConfig(elevator.status);
          
          return (
            <Card key={elevator.building} className="shadow-campus hover:shadow-campus-lg transition-campus">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 ${statusConfig.color} rounded-lg flex items-center justify-center shadow-campus`}>
                      <Building2 className={`w-6 h-6 ${statusConfig.textColor}`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        {elevator.buildingKorean} ({elevator.building}관)
                      </CardTitle>
                      <CardDescription>{elevator.floor}</CardDescription>
                    </div>
                  </div>
                  <Badge variant={getStatusBadgeVariant(elevator.status)} className="font-medium">
                    {statusConfig.icon} {statusConfig.label}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">대기시간</p>
                      <p className="text-lg font-bold text-primary">
                        {elevator.waitTime}분
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">대기인원</p>
                      <p className="text-lg font-bold text-primary">
                        {elevator.peopleCount}명
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-2 border-t border-card-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <TrendingUp className="w-3 h-3" />
                    <span>업데이트: {elevator.lastUpdated}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-xs">
                    상세보기
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Legend Card */}
      <Card className="shadow-campus">
        <CardHeader>
          <CardTitle className="text-lg">혼잡도 안내</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
              <div className="w-8 h-8 bg-elevator-green rounded-full flex items-center justify-center">
                <span className="text-success-foreground font-bold text-sm">원활</span>
              </div>
              <div>
                <p className="font-medium text-sm">원활 (0-2분)</p>
                <p className="text-xs text-muted-foreground">즉시 이용 가능</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
              <div className="w-8 h-8 bg-elevator-yellow rounded-full flex items-center justify-center">
                <span className="text-warning-foreground font-bold text-sm">보통</span>
              </div>
              <div>
                <p className="font-medium text-sm">보통 (2-4분)</p>
                <p className="text-xs text-muted-foreground">조금 기다림</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
              <div className="w-8 h-8 bg-elevator-red rounded-full flex items-center justify-center">
                <span className="text-destructive-foreground font-bold text-sm">혼잡</span>
              </div>
              <div>
                <p className="font-medium text-sm">혼잡 (4분+)</p>
                <p className="text-xs text-muted-foreground">계단 이용 권장</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ElevatorStatus;