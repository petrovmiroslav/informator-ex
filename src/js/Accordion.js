import React from 'react';
import Collapse from 'rc-collapse';
import 'rc-collapse/assets/index.css';
const Panel = Collapse.Panel;
/* Список с категориями */
export default class Accordion extends React.Component {
  constructor (props) {
    super(props);

    this.GroupsData = props.data;
    this.Groups = this.createGroups(this.GroupsData);
  }

  createGroups (data) {
    return (
      data.map((group, i) => {
        return (
          <Panel key={i} showArrow={false} header={
            <p className='collapsedList__header'>{group.header}</p>
          }headerClass="collapsedList__panel">{group.list}</Panel>
        );
      })
    );
  }

  render () {
    return (
      <Collapse 
        accordion={true}
        defaultActiveKey='0'>
        {this.Groups}
      </Collapse>
    );
  }
}
