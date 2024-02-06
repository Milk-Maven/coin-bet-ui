export const appBorder = 'border border-dashed border border-borderColor';
export const Page = {
  Welcome: 'welcome',
  Markets: {
    Offering: '/market',
    Create: '/market/create',
    Dashboard: '/market/dashboard',
  },
  Roadmap: {
    Timeline: 'roadmap',
  },
} as const;
export const GOLDEN_CALF_LOGO = 'calf.png'

export const formatDateForUser = (inputDate: string) => {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours() % 12 || 12).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
  const formattedDateTime = `${month}-${day}-${year} ${hours}:${minutes} ${ampm}`;
  return formattedDateTime;
};

export function truncateAndAddEllipsis(inputStr: string) {
  let truncatedStr = ""
  if (inputStr.length > 6) {
    truncatedStr = inputStr.slice(0, 12) + '...';
  } else {
    truncatedStr = inputStr;
  }
  return truncatedStr;
}

