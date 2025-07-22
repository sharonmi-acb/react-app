import React from 'react';
import Avatar from './ui/Avatar';
import Rating from './ui/Rating';
import Card from './ui/Card';

const TestimonialCard = ({ 
  testimonial,
  className = '',
  showCompany = true,
  ...props 
}) => {
  return (
    <Card hover className={className} {...props}>
      <Card.Header>
        <Rating rating={testimonial.rating} />
      </Card.Header>
      
      <Card.Content>
        <p className="text-gray-700 mb-6 leading-relaxed">
          "{testimonial.content}"
        </p>
      </Card.Content>
      
      <Card.Footer>
        <div className="flex items-center space-x-3">
          <Avatar 
            src={testimonial.image} 
            alt={testimonial.name}
            size="md"
          />
          <div>
            <div className="font-semibold text-gray-900">{testimonial.name}</div>
            <div className="text-gray-600 text-sm">
              {testimonial.role}{showCompany && testimonial.company ? ` at ${testimonial.company}` : ''}
            </div>
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default TestimonialCard;
