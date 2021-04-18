import React from 'react';
import { FlatList } from 'react-native';

/**
 *
 * @param {{}} props
 */
const VirtualizedView = (props) => {
  const { onRefresh, refreshing } = props;
  /**
   *
   */
  const renderListHeaderComponent = () => <>{props.children}</>;

  return (
    <FlatList
      onRefresh={onRefresh}
      refreshing={refreshing}
      data={[]}
      ListEmptyComponent={null}
      keyExtractor={() => 'dummy'}
      renderItem={null}
      ListHeaderComponent={renderListHeaderComponent}
    />
  );
};

export default VirtualizedView;
