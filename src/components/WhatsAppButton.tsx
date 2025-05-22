
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const WhatsAppButton = () => {
  const whatsappNumber = "+1234567890"; // Replace with your actual WhatsApp number
  const message = "Hello, I'm interested in your African fashion designs!";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button 
            onClick={handleWhatsAppClick}
            className="whatsapp-button"
            aria-label="Contact via WhatsApp"
          >
            <MessageSquare size={28} />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Order via WhatsApp</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default WhatsAppButton;
