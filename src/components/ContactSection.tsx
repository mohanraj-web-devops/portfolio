
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser'

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "mohanraj.web.devops@gmail.com",
      link: "mailto:mohanraj.web.devops@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 877 871 6266",
      link: "tel:+918778716266"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "India, Tamilnadu, Chennai",
      link: "#"
    }
  ];

  const icon = [
    {
      name: 'linkedin',
      imgUrl: 'https://img.icons8.com/?size=100&id=16166&format=png&color=000000',
      url: 'https://www.linkedin.com/in/mohanraj-rajaram/'
    },
    {
      name: 'github',
      imgUrl: 'https://img.icons8.com/?size=100&id=16318&format=png&color=000000',
      url: 'https://github.com/mohanraj-web-devops'
    },
    // {
    //   name: 'instagram',
    //   url: 'https://img.icons8.com/?size=100&id=ms3ftPftW1cW&format=png&color=000000'
    // }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    console.log('Form submitted:', formData);
    e.preventDefault();
    setIsSubmitting(true);
    // enable this to send email using emailjs
    emailjs.send(
      'service_w6uxqnc',
      'template_8buo5fe',
      formData,
      '2ZFUJExlUZEJ45zAs')
    
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Get In Touch</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Feel free to reach out if you're looking for a backend developer, have a question, or just want to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="h-full">
              <CardContent className="pt-6 h-full flex flex-col justify-between">
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full text-primary mr-4">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{info.title}</h3>
                        <a 
                          href={info.link} 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <h3 className="font-medium mb-3">Connect With Me</h3>
                  <div className="flex gap-3">
                    {icon.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        className="bg-secondary hover:bg-primary hover:text-white transition-colors p-3 rounded-full"
                        aria-label={`${social.name} profile`}
                      >
                        <img 
                          src={social.imgUrl} 
                          alt={social.name} 
                          className="h-5 w-5"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
