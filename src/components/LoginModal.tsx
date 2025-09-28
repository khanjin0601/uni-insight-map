import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Lock, Mail } from 'lucide-react';
import catholicLogo from '@/assets/catholic-university-logo.png';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess?: () => void;
}

const LoginModal = ({ isOpen, onClose, onLoginSuccess }: LoginModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      onClose();
      onLoginSuccess?.();
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <img 
              src={catholicLogo} 
              alt="Catholic University Logo" 
              className="w-16 h-16 object-contain"
            />
          </div>
          <DialogTitle className="text-2xl font-bold text-primary">
            가톨릭대학교 로그인
          </DialogTitle>
        </DialogHeader>
        
        <Card className="shadow-none border-0">
          <CardHeader className="text-center pb-4">
            <CardDescription>
              학번 또는 교직원 번호로 로그인하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  이메일 또는 학번
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="text"
                    placeholder="student@catholic.ac.kr"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 shadow-campus transition-campus"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  비밀번호
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 shadow-campus transition-campus"
                    required
                  />
                </div>
              </div>
              
              <Button
                type="submit"
                variant="campus"
                size="lg"
                className="w-full shadow-campus-lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                    로그인 중...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    로그인
                  </div>
                )}
              </Button>
            </form>
            
            <div className="mt-6 pt-4 border-t border-card-border">
              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">
                  계정이 없으신가요?
                </p>
                <Button variant="ghost" size="sm" className="text-primary">
                  회원가입 문의하기
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;