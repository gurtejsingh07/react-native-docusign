import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import TreeNode from '@components/tree/treeNode';
import treeData from '@components/tree/treeData';
const TreeView = ({ data }) => (
  <SafeAreaView>
    <ScrollView  contentContainerStyle={{ alignItems: 'center' }}>
        <ScrollView horizontal>
        <TreeNode node={data} />
        </ScrollView>
     
    </ScrollView>
  </SafeAreaView>
);

export default function FamilyTree() {
  return <TreeView data={treeData} />;
}
