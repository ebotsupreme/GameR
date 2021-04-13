import React from 'react';
import { FlatList } from 'react-native';

/**
 *
 * @param {{}} props
 */
const VirtualizedView = (props) => {
  /**
   *
   */
  const renderListHeaderComponent = () => <>{props.children}</>;

  return (
    <FlatList
      data={[]}
      ListEmptyComponent={null}
      keyExtractor={() => 'dummy'}
      renderItem={null}
      ListHeaderComponent={() => renderListHeaderComponent()}
    />
  );
};

export default VirtualizedView;
