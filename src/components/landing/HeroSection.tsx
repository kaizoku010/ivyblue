
import { ArrowRight, Sparkles } from "lucide-react";
import { Button, Modal } from "antd"; 
import "./hero.css"
import { Link } from "react-router-dom";
import { useState } from 'react'; 

export const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section style={{justifyContent:"center"}} className="vid_bg section-padding min-h-[90vh] flex flex-col items-center text-left relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#e6f7ff] to-transparent -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(24,144,255,0.15),transparent)] -z-10" />
      
      <div className="max-w-4xl mx-auto animate-fadeIn">
        <div className="inline-flex items-center gap-2 bg-[white] px-4 py-2 rounded-full mb-8">
          <Sparkles className="w-4 h-4 text-[#1890ff]" />
          <span className="text-sm font-medium text-[#1890ff]">Beatae vitae dicta sunt explicabo</span>
        </div>
        
        <h1 style={{color:"white"}} className=" greet text-4xl md:text-6xl font-bold mb-6 heading-gradient">
          Finibus Bonorum<br/> <span className="greet text-4xl md:text-6xl font-bold mb-6 heading-gradient"> Malorum</span>
        </h1>
        
        <p style={{fontSize:"1.1rem"}} className="text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto">

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
     </p>
        
        <div className="flex flex-col sm:flex-row gap-4  items-left">
          <Link to={"/features"}>
          <Button style={{width:"100%"}} type="primary" size="large" className="px-8 h-12 flex items-center">
            Get Started
            <ArrowRight className="ml-2 h-4" />
          </Button>
          </Link>
          <Button size="large" className="h-12" onClick={() => setIsModalOpen(true)}>
            Watch Demo
          </Button>
        </div>
      </div>

      <Modal
        title="Product Demo"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={800}
        centered
      >
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
  <iframe
    src="https://player.vimeo.com/video/1057850550"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: 'none'
    }}
    allow="autoplay; fullscreen"
    allowFullScreen
  />
</div>
      </Modal>
    </section>
  );
};
