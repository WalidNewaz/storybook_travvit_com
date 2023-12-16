import React, { useState } from 'react';

/** Components */
import TabButton from './TabButton';

// Define the data types for each tab
type TabData = {
  label: string;
  count?: number;
  content: React.ReactNode;
};

// Define the props for the TabPane component
type TabPaneProps = {
  tabs: TabData[];
};

/**
 * TabPane component.
 * Renders a tabbed pane.
 * @param params
 * @returns
 */
const TabPane: React.FC<TabPaneProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="px-8 py-6 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="full-tabs block">
          <div className="border-b-[1px] border-gray-300">
            <nav className="flex mb-[-1px]" aria-label="Tabs">
              {tabs.map((tab, index) => (
                <TabButton
                  key={index}
                  index={index}
                  label={tab.label}
                  count={tab.count}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Content of the active tab */}
      <div className="mt-4">{tabs[activeTab].content}</div>
    </div>
  );
};

export default TabPane;
