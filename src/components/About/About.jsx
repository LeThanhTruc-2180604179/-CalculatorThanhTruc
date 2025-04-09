import React from 'react';
import { 
  AboutContainer, 
  Title, 
  Section, 
  SectionTitle, 
  Text,
  FeatureList,
  FeatureItem
} from './About.styles';

const About = () => {
  return (
    <AboutContainer>
      <Title>About This Mortgage Calculator</Title>
      
      <Section>
        <SectionTitle>Purpose</SectionTitle>
        <Text>
        Máy tính thế chấp này được thiết kế để giúp bạn ước tính các khoản thanh toán thế chấp hàng tháng của mình dựa trên nhiều yếu tố như giá mua, khoản thanh toán ban đầu, lãi suất và thời hạn vay. Nó cung cấp một giao diện đơn giản và trực quan để giúp bạn lập kế hoạch tài chính mua nhà.
        </Text>
      </Section>
      
      <Section>
        <SectionTitle>How It Works</SectionTitle>
        <Text>
        Máy tính sử dụng các công thức thế chấp tiêu chuẩn để tính toán khoản thanh toán hàng tháng và số tiền vay của bạn. Chỉ cần nhập các giá trị mong muốn của bạn bằng các trường biểu mẫu và thanh trượt, máy tính sẽ tự động cập nhật kết quả theo thời gian thực.
        </Text>
      </Section>
      
      <Section>
        <SectionTitle>Features</SectionTitle>
        <FeatureList>
          <FeatureItem>Tính toán thời gian thực số tiền vay và số tiền thanh toán hàng tháng</FeatureItem>
          <FeatureItem>Thanh trượt có thể điều chỉnh cho thời hạn vay và lãi suất</FeatureItem>
          <FeatureItem>Thiết kế đáp ứng hoạt động trên mọi thiết bị</FeatureItem>
          <FeatureItem>Giao diện người dùng rõ ràng và trực quan</FeatureItem>
        </FeatureList>
      </Section>
      
      <Section>
        <SectionTitle>Disclaimer :DD </SectionTitle>
        <Text>
        Máy tính này chỉ được cung cấp cho mục đích thông tin. Kết quả là ước tính và không nên được coi là lời khuyên tài chính. Các điều khoản cho vay thực tế và các khoản thanh toán hàng tháng có thể thay đổi tùy theo tình hình cụ thể, điểm tín dụng và chính sách của bên cho vay. Chúng tôi khuyên bạn nên tham khảo ý kiến ​​của một chuyên gia thế chấp đủ tiêu chuẩn trước khi đưa ra bất kỳ quyết định tài chính nào.
        </Text>
      </Section>
    </AboutContainer>
  );
};

export default About;