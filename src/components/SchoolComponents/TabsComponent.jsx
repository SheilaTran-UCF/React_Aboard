import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImagesPic from '../../config/ImagesExport';
import icon1 from '../../assets/icon1.svg'
import icon2 from '../../assets/icon2.svg'
import icon3 from '../../assets/icon3.svg'
import icon4 from '../../assets/icon4.svg'
import icon5 from '../../assets/icon5.svg'


function TabsComponent(props) {
	console.log(ImagesPic.ca1);

	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
        // ????
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabsComponent.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export default function BasicTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box className='w-[100%] '>
			<Box >

       
        <Tabs 
        className='bg-[#ffffff] rounded-full  '
					value={value}
					onChange={handleChange}
					aria-label='basic tabs example'
					
				>
					<Tab  
          className='mx-[6px] rounded-full '

          label={
            <div className='flex justify-between items-center '>
              <div className='mx-[10px] left-[130px]'>
                <img
               width='80%'
                src={icon1} alt="" />
              </div>
              <div className='mx-[4px] '>
                <h2 className='text-[10px]'>
                  CANADA
                </h2>
              </div>
              
            </div>
          } {...a11yProps(0)} />
					<Tab
          className='mx-[6px] rounded-full'
          label={
            <div className='flex justify-between items-center '>
              <div className='mx-[10px]'>
                <img 
                 width='80%'
                src={icon2} alt="" />
              </div>
              <div className='mx-[4px] '>
                <h2 className='text-[10px]'>
                  UNITED 
                  <br/>STATES
                </h2>
              </div>
              
            </div>
          } {...a11yProps(1)} />
					<Tab 
          className='mx-[6px] rounded-full'
          label={
            <div className='flex justify-between items-center '>
            <div className='mx-[4px]'>
              <img 
              width='80%'
              src={icon3} alt="" />
            </div>
            <div className='mx-[4px] '>
              <h2 className='text-[10px]'>
              UNITED
                <br/> KINGDOM
              </h2>
            </div>
            
          </div>
          } {...a11yProps(2)} />

					<Tab
          className='mx-[6px] rounded-full'
          label={
            <div className='flex justify-between items-center '>
            <div className='mx-[4px]'>
              <img 
              className='bg-auto'
              src={icon4} alt="" />
            </div>
            <div className='mx-[10px] '>
              <h2 className='text-[10px]'>
               AUSTRALIA
              </h2>
            </div>
            
          </div>
          } {...a11yProps(3)} />
					<Tab 
          className='mx-[6px] rounded-full'
          label={
            <div className='flex justify-between items-center '>
            <div className='mx-[4px] w-[80%]'>
              <img
              className='bg-auto'
              src={icon5} alt="" />
            </div>
            <div className='mx-[10px] '>
              <h2 className='text-[10px]'>
                IRRELAND
              </h2>
            </div>
            
          </div>
          } {...a11yProps(4)} />
          
          
				</Tabs>
       
			
			</Box>

			<TabsComponent value={value} index={0} 
      className='my-[30px] '>
        <div className='flex justify-center flex-wrap'>
          <div className='w-[48%] md:w-[23%] px-[1%] py-2'>
          <img 
            className='py-[5px] w-[100%] ' src={ImagesPic.ca1} alt='' />
          </div>

          <div className='w-[48%] md:w-[23%] px-[1%] py-2'>
          <img 
            className='py-[5px] w-[100%] ' src={ImagesPic.ca1} alt='' />
          </div>
          
          <div className='w-[48%] md:w-[23%] px-[1%] py-2'>
          <img 
            className='py-[5px] w-[100%] ' src={ImagesPic.ca1} alt='' />
          </div>
          
          <div className='w-[48%] md:w-[23%] px-[1%] py-2'>
          <img 
            className='py-[5px] w-[100%] ' src={ImagesPic.ca1} alt='' />
          </div>
          
          <div className='w-[48%] md:w-[23%] px-[1%] py-2'>
          <img 
            className='py-[5px] w-[100%] ' src={ImagesPic.ca1} alt='' />
          </div>
          
          <div className='w-[48%] md:w-[23%] px-[1%] py-2'>
          <img 
            className='py-[5px] w-[100%] ' src={ImagesPic.ca1} alt='' />
          </div>
          
          <div className='w-[48%] md:w-[23%] px-[1%] py-2'>
          <img 
            className='py-[5px] w-[100%] ' src={ImagesPic.ca1} alt='' />
          </div>
          
          <div className='w-[48%] md:w-[23%] px-[1%] py-2'>
          <img 
            className='py-[5px] w-[100%] ' src={ImagesPic.ca1} alt='' />
          </div>
          
          
          
          
        </div>
				{/* <div className='grid grid-cols-12 gap-3 my-[10px]'>
					<div className='col-span-3 '>
						<img 
            className='py-[5px]' src={ImagesPic.ca1} alt='' />
					</div>

					<div className='col-span-3'>
						<img width='80%' src={ImagesPic.ca2} />
					</div>

					<div className='col-span-3'>
						<img width='80%' src={ImagesPic.ca3} />
					</div>
					<div className='col-span-3'>
						<img width='80%' src={ImagesPic.ca4} />
					</div>
          <div className='col-span-3'>
						<img width='80%' src={ImagesPic.ca5} alt='' />
					</div>
          <div className='col-span-3'>
						<img width='80%' src={ImagesPic.ca6} alt='' />
					</div>
          <div className='col-span-3'>
						<img width='80%' src={ImagesPic.ca7} alt='' />
					</div>
          <div className='col-span-3'>
						<img width='80%' src={ImagesPic.ca8} alt='' />
					</div>
				</div> */}


			</TabsComponent>

      <TabsComponent value={value} index={1} 
      className='my-[30px] '>
				<div className='grid grid-cols-12 gap-3 my-[10px]'>
					<div className='col-span-3 '>
						<img 
            className='py-[5px]' src={ImagesPic.u1} alt='' />
					</div>

					<div className='col-span-3'>
						<img width='80%' src={ImagesPic.u2} />
					</div>

					<div className='col-span-3'>
						<img width='80%' src={ImagesPic.u3} />
					</div>
					<div className='col-span-3'>
						<img width='80%' src={ImagesPic.u4} />
					</div>
          <div className='col-span-3'>
						<img width='80%' src={ImagesPic.u5} alt='' />
					</div>
          <div className='col-span-3'>
						<img width='80%' src={ImagesPic.u6} alt='' />
					</div>
          <div className='col-span-3'>
						<img width='80%' src={ImagesPic.u7} alt='' />
					</div>
          
				</div>
			</TabsComponent>
			


      <TabsComponent value={value} index={2} 
      className='my-[30px] '>
				<div className='grid grid-cols-12 gap-3 my-[10px]'>
					<div className='col-span-3 '>
						<img 
            className='py-[5px]' src={ImagesPic.uk1} alt='' />
					</div>

					<div className='col-span-3'>
						<img width='80%' src={ImagesPic.uk2} />
					</div>

					<div className='col-span-3'>
						<img width='80%' src={ImagesPic.uk4} />
					</div>
					<div className='col-span-3'>
						<img width='80%' src={ImagesPic.uk5} />
					</div>
          <div className='col-span-3'>
						<img width='80%' src={ImagesPic.uk6} alt='' />
					</div>
          <div className='col-span-3'>
						<img width='80%' src={ImagesPic.uk7} alt='' />
					</div>
          <div className='col-span-3'>
						<img width='80%' src={ImagesPic.uk8} alt='' />
					</div>
          <div className='col-span-3'>
						<img width='80%' src={ImagesPic.uk9} alt='' />
					</div>
				</div>
			</TabsComponent>

     

      <TabsComponent value={value} index={3} 
      className='my-[30px] '>
				<div className='grid grid-cols-12 gap-3 my-[10px]'>
					<div className='col-span-3 '>
						<img 
            className='py-[5px]' src={ImagesPic.a1} alt='' />
					</div>

					<div className='col-span-3'>
						<img width='80%' src={ImagesPic.a2} />
					</div>

					<div className='col-span-3'>
						<img width='80%' src={ImagesPic.a3} />
					</div>
					<div className='col-span-3'>
						<img width='80%' src={ImagesPic.a4} />
					</div>
          <div className='col-span-3'>
						<img width='80%' src={ImagesPic.a5} alt='' />
					</div>
          <div className='col-span-3'>
						<img width='80%' src={ImagesPic.a6} alt='' />
					</div>
         
				</div>
			</TabsComponent>
			

      <TabsComponent value={value} index={4} 
      className='my-[30px] '>
				<div className='grid grid-cols-12 gap-3 my-[10px]'>
					<div className='col-span-3 '>
						<img 
            className='py-[5px]' src={ImagesPic.i1} alt='' />
					</div>

					<div className='col-span-3'>
						<img width='80%' src={ImagesPic.i2} />
					</div>

					<div className='col-span-3'>
						<img width='80%' src={ImagesPic.i3} />
					</div>
					<div className='col-span-3'>
						<img width='80%' src={ImagesPic.i4} />
					</div>
          <div className='col-span-3'>
						<img width='80%' src={ImagesPic.i5} alt='' />
					</div>
          <div className='col-span-3'>
						<img width='80%' src={ImagesPic.i6} alt='' />
					</div>
         
				</div>
			</TabsComponent>
		
		</Box>
	);
}
