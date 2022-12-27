import { useEffect, useState, useCallback } from "react";
import NavBar from "../../component/Home/navbar";
import PersonalBody from "component/Personal/personalbody";
import PersonalFilterBar from "component/Personal/personalFilterBar";
import PersonalFilterAndNFTS from "component/Personal/personalFilterAndNFTS";
import { useParams, useSearchParams } from "react-router-dom";
import GetNFTInfomation from "../../service/NFTApi";
import { WalletNFT } from "model/NFT";
import OnErrorPage from "pages/OnError/onErrorPage";

const PersonalPage = () => {
  const { userId } = useParams();
  let [isValid, setIsValid] = useState<Boolean>(false);
  let [nftState, setNftState] = useState<WalletNFT | any>();
  let Error: string = "No User Found";
  let [searchState, setSearchState] = useState<string>("");

  const fetch = useCallback(() => {
    GetNFTInfomation.findNFTWithAddress(userId!)
      .then((response: any) => {
        setNftState(response.data as WalletNFT);
        setIsValid(true);
      })
      .catch(() => {
        setIsValid(false);
      });
  }, [userId]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  function getSearchValue(input: string) {
    setSearchState(input);
  }

  return (
    <div>
      <NavBar />
      {isValid ? (
        <div>
          <PersonalBody />
          <PersonalFilterBar
            amount={
              searchState === ""
                ? nftState?.ownedNfts.length
                : nftState?.ownedNfts.filter((e: any) => {
                    return e.title
                      .toLowerCase()
                      .includes(searchState.toLowerCase());
                  }).length
            }
            onSearchChange={getSearchValue}
          />
          <PersonalFilterAndNFTS nft={nftState} searchState={searchState} />
        </div>
      ) : (
        <div>
          <OnErrorPage input={Error} />
        </div>
      )}
    </div>
  );
};

export default PersonalPage;
