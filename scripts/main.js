const moduleName = 'custom-dice-d6';

Hooks.once('diceSoNiceReady', (dice3d) => {
  // MASKS
  dice3d.addSystem({id:"masks", name:"Masks"}, false);
  dice3d.addDicePreset({
    type:"d6",
    system:"masks",
    labels:[
      'modules/' + moduleName + '/images/masks/d1.png', 
      'modules/' + moduleName + '/images/masks/d2.png', 
      'modules/' + moduleName + '/images/masks/d3.png',
      'modules/' + moduleName + '/images/masks/d4.png', 
      'modules/' + moduleName + '/images/masks/d5.png', 		
      'modules/' + moduleName + '/images/masks/d6.png'
    ],
    bumpMaps:[
      'modules/' + moduleName + '/images/masks/d1_bump.png', 
      'modules/' + moduleName + '/images/masks/d2_bump.png', 
      'modules/' + moduleName + '/images/masks/d3_bump.png',
      'modules/' + moduleName + '/images/masks/d4_bump.png',		
      'modules/' + moduleName + '/images/masks/d5_bump.png',
      'modules/' + moduleName + '/images/masks/d6_bump.png'
    ]      
  });

  // AVATAR
  dice3d.addSystem({id:"avatar", name:"Avatar"}, false);
  dice3d.addDicePreset({
    type:"d6",
    system:"avatar",
    labels:[
      'modules/' + moduleName + '/images/avatar/d1.png', 
      'modules/' + moduleName + '/images/avatar/d2.png', 
      'modules/' + moduleName + '/images/avatar/d3.png',
      'modules/' + moduleName + '/images/avatar/d4.png', 
      'modules/' + moduleName + '/images/avatar/d5.png', 		
      'modules/' + moduleName + '/images/avatar/d6.png'
    ],
    bumpMaps:[
      'modules/' + moduleName + '/images/avatar/d1_bump.png', 
      'modules/' + moduleName + '/images/avatar/d2_bump.png', 
      'modules/' + moduleName + '/images/avatar/d3_bump.png',
      'modules/' + moduleName + '/images/avatar/d4_bump.png',		
      'modules/' + moduleName + '/images/avatar/d5_bump.png',
      'modules/' + moduleName + '/images/avatar/d6_bump.png'
    ]      
  });
  
});
