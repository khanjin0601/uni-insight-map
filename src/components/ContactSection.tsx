import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContactInfo {
  department: string;
  phone: string;
  email?: string;
  location?: string;
  hours?: string;
  description: string;
}

const ContactSection = () => {
  const { toast } = useToast();

  const contactData: ContactInfo[] = [
    {
      department: '교무처',
      phone: '02-2164-4000',
      email: 'academic@catholic.ac.kr',
      location: '중앙도서관 2층',
      hours: '09:00 - 18:00',
      description: '학사업무, 성적관리, 졸업업무'
    },
    {
      department: '학생지원처',
      phone: '02-2164-4500',
      email: 'student@catholic.ac.kr',
      location: '김수환추기경관 1층',
      hours: '09:00 - 18:00',
      description: '장학금, 학생상담, 동아리활동'
    },
    {
      department: '시설관리처',
      phone: '02-2164-4800',
      email: 'facility@catholic.ac.kr',
      location: '관리동 1층',
      hours: '09:00 - 17:00',
      description: '시설 수리, 건물 관리, 안전점검'
    },
    {
      department: '입학관리처',
      phone: '02-2164-4000',
      email: 'admission@catholic.ac.kr',
      location: '김수환추기경관 2층',
      hours: '09:00 - 18:00',
      description: '입학상담, 전형안내, 모집요강'
    },
    {
      department: '국제교류처',
      phone: '02-2164-4600',
      email: 'international@catholic.ac.kr',
      location: '니콜스관 3층',
      hours: '09:00 - 18:00',
      description: '해외교환, 어학연수, 외국인학생지원'
    },
    {
      department: 'IT지원센터',
      phone: '02-2164-4200',
      email: 'ithelp@catholic.ac.kr',
      location: '중앙도서관 B1층',
      hours: '09:00 - 20:00',
      description: 'PC지원, 네트워크, 사이버캠퍼스'
    }
  ];

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "복사 완료",
      description: `${type}이(가) 클립보드에 복사되었습니다.`,
    });
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-campus">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl font-bold text-primary">
            <Phone className="w-6 h-6" />
            학교 행정 연락처
          </CardTitle>
          <CardDescription>
            가톨릭대학교 주요 부서 연락처 및 업무안내
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contactData.map((contact, index) => (
          <Card key={index} className="shadow-campus hover:shadow-campus-lg transition-campus">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                {contact.department}
              </CardTitle>
              <CardDescription className="text-sm">
                {contact.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-3">
              {/* Phone */}
              <div className="flex items-center justify-between p-2 bg-accent rounded-lg">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="font-medium">{contact.phone}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(contact.phone, '전화번호')}
                  className="h-6 w-6 p-0"
                >
                  <Copy className="w-3 h-3" />
                </Button>
              </div>

              {/* Email */}
              {contact.email && (
                <div className="flex items-center justify-between p-2 bg-accent rounded-lg">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium truncate">{contact.email}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(contact.email!, '이메일')}
                    className="h-6 w-6 p-0"
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
              )}

              {/* Location */}
              {contact.location && (
                <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{contact.location}</span>
                </div>
              )}

              {/* Hours */}
              {contact.hours && (
                <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{contact.hours}</span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Emergency Contacts */}
      <Card className="shadow-campus border-orange-200 bg-orange-50/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg text-orange-800">
            📞 긴급 연락처
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center justify-between p-3 bg-orange-100 rounded-lg">
              <div>
                <p className="font-medium text-orange-800">보안실</p>
                <p className="text-sm text-orange-600">24시간 운영</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-orange-800">02-2164-4444</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard('02-2164-4444', '보안실 전화번호')}
                  className="h-6 w-6 p-0"
                >
                  <Copy className="w-3 h-3" />
                </Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-red-100 rounded-lg">
              <div>
                <p className="font-medium text-red-800">응급실</p>
                <p className="text-sm text-red-600">의료진 상주</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-red-800">02-2164-4119</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard('02-2164-4119', '응급실 전화번호')}
                  className="h-6 w-6 p-0"
                >
                  <Copy className="w-3 h-3" />
                </Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-blue-100 rounded-lg">
              <div>
                <p className="font-medium text-blue-800">상담센터</p>
                <p className="text-sm text-blue-600">심리상담 지원</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-blue-800">02-2164-4990</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard('02-2164-4990', '상담센터 전화번호')}
                  className="h-6 w-6 p-0"
                >
                  <Copy className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactSection;