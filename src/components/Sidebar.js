import styled from 'styled-components'; 
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
// import { IconContext } from 'react-icons/lib'; 

 
const SidebarWrap = styled.div`
  width: 100%;
  background-color: black;
`;
const Sidebar = () => { 
  return (
    <>   
          <SidebarWrap>           
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
    </>
  );
};

export default Sidebar;
