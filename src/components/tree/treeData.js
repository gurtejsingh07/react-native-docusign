export default  treeData ={
  name: 'King George VI',
  image: require('@assets/images/user-dummy-pic.png'),
  children: [
    {
      name: 'Queen Elizabeth II',
      image: require('@assets/images/user-dummy-pic.png'),
      children: [
        {
          name: 'Prince Charles',
          image: require('@assets/images/user-dummy-pic.png'),
          children: [
            {
              name: 'Prince William',
              image: require('@assets/images/user-dummy-pic.png'),
              children: [
                { name: 'Prince George', image: require('@assets/images/user-dummy-pic.png') },
                { name: 'Princess Charlotte', image: require('@assets/images/user-dummy-pic.png') },
                { name: 'Prince Louis', image: require('@assets/images/user-dummy-pic.png') },
              ],
            },
            { name: 'Prince Harry', image: require('@assets/images/user-dummy-pic.png') },
          ],
        },
        { name: 'Princess Anne', image: require('@assets/images/user-dummy-pic.png') },
        { name: 'Prince Andrew', image: require('@assets/images/user-dummy-pic.png') },
        { name: 'Prince Edward', image: require('@assets/images/user-dummy-pic.png') },
      ],
    },
    { name: 'Princess Margaret', image: require('@assets/images/user-dummy-pic.png') },
  ],
};