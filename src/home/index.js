import React from 'react'
import style from './style/index.module.scss'
import { Tabs } from 'antd-mobile';

const tabs = [
  { title: "First Tab" },
  { title: "Second Tab" },
  { title: "ggod"},
];

const TabExample = () => (
  <div>
    <Tabs tabs={tabs}
      initialPage={1}
      onChange={(tab, index) => { console.log('onChange', index, tab); }}
      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
        Content of first tab
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
        Content of second tab
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
        Content of third tab
      </div>
    </Tabs>
      <div className={style.container}>
        style
      </div>
  </div>
  
);

export default TabExample;
