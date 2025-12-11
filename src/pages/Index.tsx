import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Radio" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-secondary">Максима Групп</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection("home")} className="text-sm font-medium hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-primary transition-colors">
                О компании
              </button>
              <button onClick={() => scrollToSection("services")} className="text-sm font-medium hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection("portfolio")} className="text-sm font-medium hover:text-primary transition-colors">
                Портфолио
              </button>
              <button onClick={() => scrollToSection("clients")} className="text-sm font-medium hover:text-primary transition-colors">
                Клиенты
              </button>
              <button onClick={() => scrollToSection("contacts")} className="text-sm font-medium hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
          </nav>
        </div>
      </header>

      <section id="home" className="pt-24 pb-20 bg-gradient-to-b from-secondary to-secondary/90">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Надёжная инфраструктура для связи
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Инфраструктурный оператор антенно-мачтовых сооружений для сотовой связи в Санкт-Петербурге и Ленинградской области
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" onClick={() => scrollToSection("contacts")}>
                Связаться с нами
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/e19a2941-e76b-4369-baad-a482b14c736d/files/d3ca1ecd-2485-4d3a-be14-ed697321b2d0.jpg" 
                alt="Антенная вышка" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">О компании</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Максима Групп — профессиональный инфраструктурный оператор с многолетним опытом работы на рынке телекоммуникаций
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center animate-fade-in hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Radio" size={32} className="text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2">15+</h3>
                <p className="text-muted-foreground">Лет на рынке</p>
              </CardContent>
            </Card>

            <Card className="text-center animate-fade-in hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TowerControl" size={32} className="text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2">200+</h3>
                <p className="text-muted-foreground">Объектов инфраструктуры</p>
              </CardContent>
            </Card>

            <Card className="text-center animate-fade-in hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2">4</h3>
                <p className="text-muted-foreground">Крупных оператора</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-muted/50">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed">
                Наша компания специализируется на предоставлении антенно-мачтовых сооружений для операторов сотовой связи "большой четверки". 
                Мы обеспечиваем надёжную инфраструктуру для бесперебойной работы сетей мобильной связи на территории 
                Санкт-Петербурга и Ленинградской области. Центральный офис расположен по адресу: СПб, Торжковская 5, Бизнес центр ОПТИМА.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Полный спектр услуг для операторов сотовой связи
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Building2" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Аренда антенно-мачтовых сооружений</h3>
                    <p className="text-muted-foreground">
                      Предоставляем в аренду современные АМС с полной технической поддержкой и обслуживанием. 
                      Все объекты соответствуют требованиям операторов связи.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Wrench" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Техническое обслуживание</h3>
                    <p className="text-muted-foreground">
                      Обеспечиваем круглосуточное техническое обслуживание оборудования, проводим плановые и внеплановые 
                      ремонтные работы для поддержания бесперебойной работы.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Hammer" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Строительство новых объектов</h3>
                    <p className="text-muted-foreground">
                      Проектируем и строим новые антенно-мачтовые сооружения под ключ с учётом всех требований 
                      и получением необходимых разрешений.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Обеспечение безопасности</h3>
                    <p className="text-muted-foreground">
                      Организуем охрану объектов, контроль доступа и видеонаблюдение для защиты 
                      телекоммуникационного оборудования наших клиентов.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Портфолио</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            География наших объектов охватывает весь Санкт-Петербург и Ленинградскую область
          </p>

          <Card className="mb-12">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Зона покрытия</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Icon name="MapPin" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Санкт-Петербург (все районы)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="MapPin" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Ленинградская область</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="MapPin" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Крупные транспортные узлы</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="MapPin" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Промышленные зоны</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted/50 rounded-lg p-8 flex items-center justify-center h-[300px]">
                  <div className="text-center">
                    <Icon name="Map" size={80} className="text-muted-foreground/50 mx-auto mb-4" />
                    <p className="text-muted-foreground">Интерактивная карта объектов</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Building2" size={48} className="text-muted-foreground/50" />
                </div>
                <h4 className="font-bold mb-2">Центральные районы СПб</h4>
                <p className="text-sm text-muted-foreground">50+ объектов покрытия</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="TowerControl" size={48} className="text-muted-foreground/50" />
                </div>
                <h4 className="font-bold mb-2">Пригороды и область</h4>
                <p className="text-sm text-muted-foreground">80+ объектов покрытия</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Radio" size={48} className="text-muted-foreground/50" />
                </div>
                <h4 className="font-bold mb-2">Специальные объекты</h4>
                <p className="text-sm text-muted-foreground">70+ объектов покрытия</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="clients" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Наши клиенты</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Мы сотрудничаем с ведущими операторами сотовой связи "большой четверки"
          </p>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 flex items-center justify-center h-32">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Icon name="Signal" size={32} className="text-primary" />
                  </div>
                  <p className="font-medium text-sm">Оператор 1</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 flex items-center justify-center h-32">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Icon name="Wifi" size={32} className="text-primary" />
                  </div>
                  <p className="font-medium text-sm">Оператор 2</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 flex items-center justify-center h-32">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Icon name="Antenna" size={32} className="text-primary" />
                  </div>
                  <p className="font-medium text-sm">Оператор 3</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 flex items-center justify-center h-32">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Icon name="Radio" size={32} className="text-primary" />
                  </div>
                  <p className="font-medium text-sm">Оператор 4</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Свяжитесь с нами для обсуждения сотрудничества
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6">Наши контакты</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Адрес офиса</p>
                        <p className="text-muted-foreground">Санкт-Петербург, Торжковская 5<br/>Бизнес центр ОПТИМА</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Телефон</p>
                        <p className="text-muted-foreground">+7 (812) 123-45-67</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Email</p>
                        <p className="text-muted-foreground">info@maxima-group.ru</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Clock" size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Время работы</p>
                        <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00<br/>Сб-Вс: выходной</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6">Форма обратной связи</h3>
                  
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Имя</label>
                      <Input placeholder="Ваше имя" />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input type="email" placeholder="email@example.com" />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон</label>
                      <Input type="tel" placeholder="+7 (___) ___-__-__" />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Сообщение</label>
                      <Textarea placeholder="Расскажите о вашем проекте" rows={4} />
                    </div>

                    <Button className="w-full" size="lg">
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Radio" size={32} className="text-primary" />
                <span className="text-xl font-bold">Максима Групп</span>
              </div>
              <p className="text-white/80 text-sm">
                Инфраструктурный оператор антенно-мачтовых сооружений для сотовой связи
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors">О компании</button></li>
                <li><button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">Услуги</button></li>
                <li><button onClick={() => scrollToSection("portfolio")} className="hover:text-white transition-colors">Портфолио</button></li>
                <li><button onClick={() => scrollToSection("contacts")} className="hover:text-white transition-colors">Контакты</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Санкт-Петербург, Торжковская 5</li>
                <li>+7 (812) 123-45-67</li>
                <li>info@maxima-group.ru</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>© 2024 Максима Групп. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
