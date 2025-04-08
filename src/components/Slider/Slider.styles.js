import styled from 'styled-components';

export const SliderContainer = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const RangeContainer = styled.div`
  position: relative;
  flex: 1;
`;

export const Range = styled.input`
  /* Loại bỏ style mặc định của input range */
  -webkit-appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  outline: none;

  /* Biến CSS chứa phần trăm tiến trình */
  /* Ví dụ: --range-progress: 50% */
  --range-progress: 0%;

  /* Xử lý track cho WebKit (Chrome, Safari, Opera) */
  &::-webkit-slider-runnable-track {
    height: 6px;
    border-radius: 3px;

    /* 
      Ta sử dụng linear-gradient để tô màu từ đầu đến --range-progress 
      Làm phần bên trái màu cam (#ff8c00), phần bên phải màu xám (#f0f0f0)
    */
    background: linear-gradient(
      to right,
      #ff8c00 0%,
      #ff8c00 var(--range-progress),
      #f0f0f0 var(--range-progress),
      #f0f0f0 100%
    );
  }

  /* Thumb cho WebKit */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #ff8c00;
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    margin-top: -6px; /* Căn giữa thumb so với track */
  }

  /* Xử lý track cho Firefox */
  &::-moz-range-track {
    height: 6px;
    border-radius: 3px;
    background: linear-gradient(
      to right,
      #ff8c00 0%,
      #ff8c00 var(--range-progress),
      #f0f0f0 var(--range-progress),
      #f0f0f0 100%
    );
  }

  /* Thumb cho Firefox */
  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #ff8c00;
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    transform: translateY(-50%); /* Firefox không hỗ trợ margin-top */
  }
`;

export const RangeLabels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

export const RangeLabel = styled.span`
  font-size: 0.8rem;
  color: #777;
`;

export const UnitLabel = styled.div`
  font-size: 0.8rem;
  color: #777;
  margin-top: 0.25rem;
`;

export const CurrentValueBox = styled.div`
  background-color: #f5f5f5;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  min-width: 60px;
  text-align: center;
`;
