export function formatAsCurrency(amount: number): string {
    const formattedAmount = amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0, // Set minimumFractionDigits to 0
    });
    return formattedAmount;
}
interface MenuItem {
    title: string;
    url: string;
    level: number;
    submenu?: MenuItem[];
}
export function getMenuLevels(menuItems: MenuItem[], parentLevel: number = 0, levelMap: Record<string, number> = {}): Record<string, number> {
    menuItems.forEach(item => {
        levelMap[item.title] = parentLevel;

        if (item.submenu && item.submenu.length > 0) {
            getMenuLevels(item.submenu, parentLevel + 1, levelMap);
        }
    });

    return levelMap;
}